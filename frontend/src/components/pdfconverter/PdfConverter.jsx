import React, { useState } from "react";
import PDFFeature from "./PDFFeatures";
import ImageFormatGuide from "../Home/FormateGuide";
import FAQSection from "../Home/FAQ";
import imageCompression from "browser-image-compression";
import Buttons from "../Buttons";

const PdfConverter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
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

        // Trigger download
        const link = document.createElement("a");
        link.href = URL.createObjectURL(compressedImage);
        link.download = compressedImage.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error compressing image:", error);
      }
    }
  };

  const buttonNames = [
    "compress image to 4kb",
    "Compress JPEG To 200kb",
    "245 kb photo converter",
    "600×600 pixels image converter",
    "480 x 360 pixels",
    "Online PDF Converter",
    "pdf compressor 200kb",
    "compress pdf to 400kb",
    "compress pdf online to 100kb",
    "PNG To 200kb",
    "JPEG To 10Kb",
    "Compress PNG To 10Kb",
    "Compress JPEG To 100kb",
    "Compress JPEG To 300kb",
    "Compress JPEG To 30kb",
    "Compress JPEG To 50kb",
    "Compress JPEG To 150kb",
    "Compress JPEG To 20kb",
    "compress image to 100kb",
    "compress png to 90kb",
    "Compress gif to 256kb",
    "Compress gif to 1MB",
    "Compress gif to 10MB",
    "Resize Image To 1000×1000",
    "1600×1600 converter",
    "512 x 512 image converter",
    "2×2 picture size online free",
    "youtube thumbnail resizer",
    "1024 x 576 pixels",
    "3000×3000 image converter",
    "a4 size converter",
    "200×200 image converter",
    "photo resizer 300×300",
    "compress png to 500kb",
    "passport photo converter",
  ];
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <div className="flex gap-5">
          <div className="left-side mb-6 rounded mt-20 bg-white p-5 shadow-md pt-20 flex-grow overflow-auto">
            <h1 className="text-3xl font-semibold mb-52">
              PDF Converter – Quickly Convert Your Images
            </h1>
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
                  Select Images
                </label>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-[#0C2F55] hover:scale-105 transition-all duration-300 ml-3 text-white px-7 py-2 rounded-full"
                >
                  Convert
                </button>
                <button
                  type="submit"
                  className="bg-[#0C2F55] hover:scale-105 transition-all duration-300 ml-3 text-white px-7 py-2 rounded-full"
                >
                  Download
                </button>
              </div>
            </form>

            {/* **** Article **** */}
            <div>
              <p className="mt-36 text-xl p-4">
                PDF is a well-known format containing data or information such
                as images (vector graphics and Bitmap graphics). Also, PDF
                stands for Portable Document Format. In addition to a PDF, it
                can be different sizes that can vary according to the
                information in it. In the digital world, it is used to share
                information or represent document presentations. Furthermore, we
                use or share PDFs in our universities, colleges, and offices
                daily. Depending on the information in it, a PDF can have
                different sizes. Many online platforms including learning
                management systems (LMS), office management systems, content
                management systems (CMS), or other information management
                systems allow us to share or upload PDFs for specific purposes.
                But these systems and social media apps (Facebook, WhatsApp,
                Twitch, etc.) also have some limitations for PDF file uploading.
                For sure, it can be the size limit. In this blog post, we will
                let you know how to resize, compress, and use an online PDF
                converter.
              </p>

              <h1 className="font-bold text-3xl text-[#F79422] mt-36 text-center">
                What Is A PDF File?{" "}
              </h1>
              <p className="text-xl p-4 mt-5">
                PDF is known as the Portable Document Format. This is a kind of
                file format that was developed by Adobe in 1992. In addition,
                PDF was developed to represent the document. A PDF document can
                have any text or images in it. Each document contains text,
                fonts, vectors, images (JPG, JPEG, PNG, GIFF), and some other
                information to be displayed. Moreover, a PDF file can be public
                or password-protected. It was standardized in 2008 as ISO 32000.
              </p>
            </div>
            <PDFFeature />
            <FAQSection />
          </div>
          <Buttons />
        </div>
      </div>
    </section>
  );
};

export default PdfConverter;
