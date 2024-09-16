import React, { useState } from 'react';
import imageCompression from "browser-image-compression";

function FeatureimageCoverter() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [compressedFileURL, setCompressedFileURL] = useState(null);
  const [format, setFormat] = useState('webp');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 5 * 1024 * 1024; // 5MB limit for image display
  
    if (file.size > maxSize) {
      alert('Image size is too large! Please choose a file smaller than 5MB.');
      return;
    }
  
    setSelectedFile(file);
    setCompressedFile(null); // Reset compressed file when a new image is selected
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sizeInKB = parseInt(document.getElementById("size-input").value);

    if (selectedFile) {
      try {
        const options = {
          maxSizeMB: sizeInKB / 1024, // Convert KB to MB
          useWebWorker: true,
        };

        const compressedImage = await imageCompression(selectedFile, options);
        setCompressedFile(compressedImage);
        setCompressedFileURL(URL.createObjectURL(compressedImage));
      } catch (error) {
        console.error("Error compressing image:", error);
      }
    }
  };

  const handleConvert = async (format) => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    let endpoint = '';
    if (format === 'webp') endpoint = '/convert-image-to-webp';
    else if (format === 'png') endpoint = '/convert-image-to-png';
    else if (format === 'jpg') endpoint = '/convert-image-to-jpg';

    try {
      const response = await fetch(`http://localhost:5005/api/articles${endpoint}`, {
        method: 'POST',
        body: formData,
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `converted_image.${format}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error converting image:", error);
    }
  };

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <div className="flex gap-5">
          <div className="left-side mb-6 rounded mt-20 bg-white p-5 shadow-md pt-20 flex-grow overflow-auto">
            <h1 className="text-3xl font-semibold mb-6">Image Converter</h1>

            

            <form onSubmit={handleSubmit}>
              <div className="border-2 hover:border-dotted border-[#0C2F55] rounded p-4 mb-4 text-center">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="file-upload"
                  onChange={handleFileChange}
                  required
                />
                <p className="mb-6 text-gray-500 text-[18px]">
                  Select Or Drag Images Here
                </p>
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer px-6 py-2 bg-[#0C2F55] hover:bg-[#F79422] text-white transition"
                >
                  Select Image
                </label>
              </div>
              
            </form>

            {/* Conversion Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => handleConvert('webp')}
                className="bg-[#F79422] hover:bg-[#0C2F55] text-white px-6 py-2 rounded-full"
              >
                Convert to WebP
              </button>
              <button
                onClick={() => handleConvert('png')}
                className="bg-[#F79422] hover:bg-[#0C2F55] text-white px-6 py-2 rounded-full"
              >
                Convert to PNG
              </button>
              <button
                onClick={() => handleConvert('jpg')}
                className="bg-[#F79422] hover:bg-[#0C2F55] text-white px-6 py-2 rounded-full"
              >
                Convert to JPG
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureimageCoverter;
