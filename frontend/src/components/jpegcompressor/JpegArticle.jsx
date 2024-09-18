import React, { useState } from "react";
import FAQSection from "../Home/FAQ";
import imageCompression from "browser-image-compression";
import Buttons from "../Buttons";

const JpegArticle = () => {
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
          maxSizeMB: sizeInKB / 1024,
          useWebWorker: true,
        };
        const compressedImage = await imageCompression(selectedFile, options);
        setCompressedFile(compressedImage);
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

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="left-side mb-6 rounded mt-4 lg:mt-20 bg-white p-4 lg:p-8 shadow-md flex-grow overflow-auto">
            <h1 className="text-2xl lg:text-3xl font-semibold mb-8">
              JPEG Image Compressor – Quickly Compress Your Images
            </h1>
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="border-2 hover:border-dotted border-[#0C2F55] rounded p-4 mb-4 text-center">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="file-upload"
                  onChange={handleFileChange}
                  required
                />
                <p className="mb-6 text-gray-500 text-base lg:text-lg">
                  Select Or Drag Images Here
                </p>
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer px-4 lg:px-6 py-2 bg-[#0C2F55] hover:bg-[#F79422] text-white transition"
                >
                  Select Images
                </label>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <div className="flex items-center">
                  <label htmlFor="size-input" className="mr-2">
                    Size
                  </label>
                  <input
                    id="size-input"
                    type="number"
                    className="border-2 border-[#0C2F55] py-1 px-2 w-24"
                    placeholder="Enter KB"
                    required
                  />
                  <span className="bg-[#0C2f55] text-white p-1 py-2">KB</span>
                </div>
                <button
                  type="submit"
                  className="bg-[#0C2F55] hover:scale-105 transition-all duration-300 text-white px-6 py-2 rounded-full"
                >
                  Compress
                </button>
              </div>
            </form>

            <div className="mt-12 lg:mt-20">
              <p className="text-base lg:text-xl mb-8">
                Image compressor is a tool that compress or reduce the size of
                an image. While on the other hand, online image compressor is an
                online tool that reduce the image size online. In addition, it
                can compress any kind of image type like{" "}
                <span className="text-[#F79422]">JPG, JPEG, PNG,</span> etc. Our
                online photo compressor tool is made using latest algorithms and
                techniques. Moreover, it won't decrease the image quality.
              </p>

              <h2 className="font-bold text-2xl lg:text-3xl text-[#F79422] mb-8 text-center">
                Online Image Compressor Tool
              </h2>
              <p className="text-base lg:text-xl">
                Online compress jpeg tool is used to compress or reduce the
                photo size online. It is made up with the latest optimization
                algorithms. It reduce or shrink the images with type of .JPG,
                .JPEG, .PNG, and .GIF to the possible required file size without
                loosing its quality. In addition, the compression with
                CompressKaru.com is very easy and simple. It also provides the
                best compressed image quality and accuracy.
                <br />
                <br />
                There is no maximum image upload size boundary. It means that
                you can upload any image with the maximum file size.
                Additionally, Photo compressor make the digital photo like a
                characteristics of a physical image with possible minimum file
                size. If we talk on image quality, out tool will not loos the
                image qulity or pixels.
              </p>
            </div>
            <FAQSection />
          </div>
          <div className="lg:w-1/4 mx-auto">
            <Buttons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JpegArticle;
