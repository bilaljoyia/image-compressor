import React, { useState } from "react";
import Features from "./Features";
import ImageFormatGuide from "./FormateGuide";
import FAQSection from "./FAQ";
import imageCompression from "browser-image-compression";
import Buttons from "../Buttons";

const ImageCompressor = () => {
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
              Online Image Compressor – Quickly Compress Your Images
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
                <div className="">
                  <label htmlFor="size-input">Size</label>
                  <input
                    id="size-input"
                    type="number"
                    className="border-2 border-[#0C2F55] py-1"
                    placeholder="Enter size in KB"
                    required
                  />
                  <span className="bg-[#0C2f55] text-white p-1 py-2">KB</span>
                </div>
                <button
                  type="submit"
                  className="bg-[#0C2F55] hover:scale-105 transition-all duration-300 ml-3 text-white px-7 py-2 rounded-full"
                >
                  Compress
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
                Image compressor is a tool that compress or reduce the size of
                an image. While on the other hand, online image compressor is an
                online tool that reduce the image size online. In addition, it
                can compress any kind of image type like{" "}
                <span className="text-[#F79422]">JPG, JPEG, PNG,</span> etc. Our
                online photo compressor tool is made using latest algorithms and
                techniques. Moreover, it won’t decrease the image quality.
              </p>

              <h1 className="font-bold text-3xl text-[#F79422] mt-36 text-center">
                Online Image Compressor Tool
              </h1>
              <p className="text-xl p-4 mt-5">
                Online compress jpeg tool is used to compress or reduce the
                photo size online. It is made up with the latest optimization
                algorithms. It reduce or shrink the images with type of .JPG,
                .JPEG, .PNG, and .GIF to the possible required file size without
                loosing its quality. In addition, the compression with
                CompressKaru.com is very easy and simple. It also provides the
                best compressed image quality and accuracy. There is no maximum
                image upload size boundary. It means that you can upload any
                image with the maximum file size. Additionally, Photo compressor
                make the digital photo like a characteristics of a physical
                image with possible minimum file size. If we talk on image
                quality, out tool will not loos the image qulity or pixels.
              </p>

              {/* ***** Buttons ***** */}
              <div className="flex flex-wrap gap-2 mt-20">
                {buttonNames.map((name, index) => (
                  <button
                    key={index}
                    className="text-center font-semibold text-white bg-[#F79422] py-2 px-3 hover:bg-[#0C2F55] rounded-full text-sm whitespace-nowrap"
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
            <Features />
            <ImageFormatGuide />
            <FAQSection />
          </div>
          <Buttons />
        </div>
      </div>
    </section>
  );
};

export default ImageCompressor;
