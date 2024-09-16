const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ArticalPost = require('./Model/Artical');
require('dotenv').config();
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const os = require('os');
const { PDFDocument, rgb } = require('pdf-lib'); // Add this line for PDF creation
const tmpDir = os.tmpdir();

const app = express();
app.use(express.json());

// Enable CORS
app.use(cors());

const port = process.env.PORT || 5005;


// Helper function to delete temp files
const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
    } else {
      console.log("File deleted successfully:", filePath);
    }
  });
};
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Route to post a new article
app.post('/api/articles', async (req, res) => {
  try {
    const { category, title, discripition } = req.body;
    const newArtical = new ArticalPost({
      category,
      title,
      discripition
    });
    await newArtical.save();
    res.status(201).json({ message: 'Article posted successfully', article: newArtical });
  } catch (err) {
    res.status(500).json({ message: 'Error posting article', error: err.message });
  }
});
// Route to get all articles
app.get('/api/articles', async (req, res) => {
  try {
    const articles = await ArticalPost.find(); // Fetch all articles from the database
    res.status(200).json(articles); // Return the list of articles
  } catch (err) {
    res.status(500).json({ message: 'Error fetching articles', error: err.message });
  }
});

// Route to get a single article by ID
app.get('/api/articles/:id', async (req, res) => {
  try {
    const articleId = req.params.id;
    const article = await ArticalPost.findById(articleId); // Find article by ID

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    res.status(200).json(article); // Return the article
  } catch (err) {
    res.status(500).json({ message: 'Error fetching article', error: err.message });
  }
});
// Route to get articles by category
app.get('/api/articles/category/:category', async (req, res) => {
  try {
    const category = req.params.category;
    const articles = await ArticalPost.find({ category }); // Find articles by category
    if (articles.length === 0) {
      return res.status(404).json({ message: 'No articles found in this category' });
    }
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching articles by category', error: err.message });
  }
});


// Multer setup for file uploads (storing in memory instead of filesystem)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Endpoint to compress and download the image
app.post('/compress-image', upload.single('image'), async (req, res) => {
  const sizeInKB = parseInt(req.body.size);
  const maxSizeBytes = sizeInKB * 1024; // KB to Bytes
  const imageBuffer = req.file.buffer;
  
  try {
    let compressedImageBuffer = await sharp(imageBuffer)
      .resize({ width: 800 }) // Adjust dimensions as needed
      .toBuffer();

    // Check size and adjust quality to meet the target size
    let quality = 100; // Start with high quality
    while (compressedImageBuffer.length > maxSizeBytes && quality > 0) {
      compressedImageBuffer = await sharp(imageBuffer)
        .resize({ width: 800 })
        .jpeg({ quality }) // Reduce JPEG quality gradually
        .toBuffer();
      quality -= 5; // Decrease quality by 5% increments
    }

    // Send the compressed image directly back to the client
    res.set('Content-Type', 'image/jpeg');
    res.set('Content-Disposition', `attachment; filename=compressed_${Date.now()}_${req.file.originalname}`);
    res.send(compressedImageBuffer);
  } catch (error) {
    console.error('Error compressing image:', error);
    res.status(500).send('Error processing image');
  }
});

// Endpoint to resize and download the image
app.post('/resize-image', upload.single('image'), async (req, res) => {
  const width = parseInt(req.body.width);
  const height = parseInt(req.body.height);
  const imageBuffer = req.file.buffer;

  try {
    const resizedImageBuffer = await sharp(imageBuffer)
      .resize(width, height)
      .toBuffer();

    res.set('Content-Type', 'image/jpeg');
    res.set('Content-Disposition', `attachment; filename=resized_${Date.now()}_${req.file.originalname}`);
    res.send(resizedImageBuffer);
  } catch (error) {
    console.error('Error resizing image:', error);
    res.status(500).send('Error processing image');
  }
});

app.post('/convert-image-to-pdf', upload.single('image'), async (req, res) => {
  try {
    // Ensure the image buffer exists
    if (!req.file || !req.file.buffer) {
      return res.status(400).send('No image file provided');
    }

    const imageBuffer = req.file.buffer;

    // Use sharp to handle image conversion to PNG with higher quality
    const optimizedImageBuffer = await sharp(imageBuffer)
      .resize(600, 800, { fit: 'inside', kernel: sharp.kernel.lanczos3 }) // Resize using high-quality interpolation
      .png({ compressionLevel: 0, quality: 100 }) // Ensure minimal compression and highest quality
      .toBuffer();

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);

    // Embed the optimized PNG image in the PDF
    const image = await pdfDoc.embedPng(optimizedImageBuffer);
    const { width, height } = image.scale(1); // Scale the image

    // Draw the image on the PDF page
    page.drawImage(image, {
      x: 0,
      y: page.getHeight() - height,
      width,
      height,
    });

    // Save the PDF and send it to the client
    const pdfBytes = await pdfDoc.save();
    res.set('Content-Type', 'application/pdf');
    res.set('Content-Disposition', `attachment; filename=image_${Date.now()}.pdf`);
    res.send(Buffer.from(pdfBytes));
    
  } catch (error) {
    console.error('Error converting image to PDF:', error);
    res.status(500).send('Error processing image');
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
