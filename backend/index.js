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
    let quality = 100; // Start with high quality
    let compressedImageBuffer = await sharp(imageBuffer)
      .resize({ width: 800 }) // Adjust dimensions as needed
      .jpeg({ quality }) // Reduce JPEG quality gradually
      .toBuffer();

    while (compressedImageBuffer.length > maxSizeBytes && quality > 0) {
      quality -= 5; // Decrease quality by 5% increments
      compressedImageBuffer = await sharp(imageBuffer)
        .resize({ width: 800 })
        .jpeg({ quality }) // Reduce JPEG quality gradually
        .toBuffer();
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
    if (!req.file || !req.file.buffer) {
      return res.status(400).send('No image file provided');
    }

    const imageBuffer = req.file.buffer;

    const optimizedImageBuffer = await sharp(imageBuffer)
      .resize(600, 800, { fit: 'inside', kernel: sharp.kernel.lanczos3 })
      .png({ compressionLevel: 0, quality: 100 })
      .toBuffer();

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);

    const image = await pdfDoc.embedPng(optimizedImageBuffer);
    const { width, height } = image.scale(1);

    page.drawImage(image, {
      x: 0,
      y: page.getHeight() - height,
      width,
      height,
    });

    const pdfBytes = await pdfDoc.save();
    res.set('Content-Type', 'application/pdf');
    res.set('Content-Disposition', `attachment; filename=image_${Date.now()}.pdf`);
    res.send(Buffer.from(pdfBytes));
    
  } catch (error) {
    console.error('Error converting image to PDF:', error);
    res.status(500).send('Error processing image');
  }
});

app.post('/convert-image-to-webp', upload.single('image'), async (req, res) => {
  const imageBuffer = req.file.buffer;

  try {
    const webpImageBuffer = await sharp(imageBuffer)
      .webp() // Convert to webp without adjusting quality
      .toBuffer();

    res.set('Content-Type', 'image/webp');
    res.set('Content-Disposition', `attachment; filename=converted_image_${Date.now()}.webp`);
    res.send(webpImageBuffer);
  } catch (error) {
    console.error('Error converting image to WebP:', error);
    res.status(500).send('Error processing image');
  }
});

app.post('/convert-image-to-png', upload.single('image'), async (req, res) => {
  const imageBuffer = req.file.buffer;

  try {
    const pngImageBuffer = await sharp(imageBuffer)
      .png() // Convert to PNG without adjusting compression
      .toBuffer();

    res.set('Content-Type', 'image/png');
    res.set('Content-Disposition', `attachment; filename=converted_${Date.now()}.png`);
    res.send(pngImageBuffer);
  } catch (error) {
    console.error('Error converting image to PNG:', error);
    res.status(500).send('Error processing image');
  }
});

app.post('/convert-image-to-jpg', upload.single('image'), async (req, res) => {
  const imageBuffer = req.file.buffer;

  try {
    const jpgImageBuffer = await sharp(imageBuffer)
      .jpeg() // Convert to JPEG without adjusting quality
      .toBuffer();

    res.set('Content-Type', 'image/jpeg');
    res.set('Content-Disposition', `attachment; filename=converted_${Date.now()}.jpg`);
    res.send(jpgImageBuffer);
  } catch (error) {
    console.error('Error converting image to JPG:', error);
    res.status(500).send('Error processing image');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
