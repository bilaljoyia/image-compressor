const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Add this line
const ArticalPost = require('./Model/Artical');
require('dotenv').config();
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const os = require('os');
const tmpDir = os.tmpdir(); 

const app = express();
app.use(express.json());

// Enable CORS
app.use(cors());  // Add this line

const port = process.env.PORT || 5005;

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

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' }); // Temp storage

// Endpoint to upload and compress the image
// Endpoint to upload and compress the image
app.post('/compress-image', upload.single('image'), async (req, res) => {
  const sizeInKB = parseInt(req.body.size);
  const maxSizeBytes = sizeInKB * 1024; // KB to Bytes
  const imagePath = req.file.path;
  const outputFile = `compressed_${Date.now()}_${req.file.originalname}`;

  try {
    let compressedImageBuffer = await sharp(imagePath)
      .resize({ width: 800 }) // Adjust dimensions as needed
      .toBuffer();

    // Check size and adjust quality to meet the target size
    let quality = 100; // Start with high quality
    while (compressedImageBuffer.length > maxSizeBytes && quality > 0) {
      compressedImageBuffer = await sharp(imagePath)
        .resize({ width: 800 })
        .jpeg({ quality }) // Reduce JPEG quality gradually
        .toBuffer();
      quality -= 5; // Decrease quality by 5% increments
    }

    // Save the compressed image
    await sharp(compressedImageBuffer)
      .toFile(path.join('uploads', outputFile));

    // Send the compressed image back to the client
    res.download(path.join('uploads', outputFile));
  } catch (error) {
    console.error('Error compressing image:', error);
    res.status(500).send('Error processing image');
  } finally {
    fs.unlinkSync(imagePath); // Clean up the temp file
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
