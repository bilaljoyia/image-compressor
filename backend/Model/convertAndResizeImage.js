const sharp = require('sharp');

const convertAndResizeImage = async (inputPath, outputPath, format, width, height, quality) => {
    try {
        let transformer = sharp(inputPath).toFormat(format, { quality });

        if (width || height) {
            transformer = transformer.resize({ width, height });
        }

        await transformer.toFile(outputPath);
        console.log(`Image converted to ${format} and resized.`);
    } catch (error) {
        console.error('Error converting or resizing image:', error);
    }
};

module.exports = convertAndResizeImage;
