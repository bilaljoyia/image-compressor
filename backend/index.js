// Import necessary modules and model
const express = require('express');
const mongoose = require('mongoose');
const ArticalPost = require('./Model/Artical'); // Adjust path based on folder structure
require('dotenv').config();
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const convertAndResizeImage = require('./Model/convertAndResizeImage');

const app = express();
app.use(express.json());

const port = process.env.PORT || 5005;

// Ensure directories exist
const checkDirectory = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
};
checkDirectory('uploads');
checkDirectory('converted');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// Multer setup for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Image conversion route
app.post('/convert', upload.single('image'), async (req, res) => {
    const { format, width, height, quality } = req.body;
    const filePath = req.file.path;
    const outputPath = `converted/${Date.now()}.${format}`;

    try {
        await convertAndResizeImage(filePath, outputPath, format, parseInt(width), parseInt(height), parseInt(quality));

        // Send converted image
        res.download(outputPath, (err) => {
            if (err) console.error('Error sending file:', err);

            // Clean up after sending file
            fs.unlinkSync(filePath);
            fs.unlinkSync(outputPath);
        });
    } catch (error) {
        console.error('Conversion error:', error);
        res.status(500).send('Error processing image');
    }
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

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
