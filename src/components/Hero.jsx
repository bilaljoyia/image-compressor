import React, { useState } from "react";
import Features from "./Features";

const ImageCompressor = () => {
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
          <div className="left-side mt-20 bg-white p-5 pt-20 flex-grow overflow-auto">
            <h1 className="text-3xl font-semibold mb-52">
              Online Image Compressor – Quickly Compress Your Images
            </h1>
            <div className="border-2  hover:border-dotted border-[#0C2F55] rounded p-4 mb-4 text-center">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="file-upload"
              />
              <p className="mb-6 text-gray-500 text-[18px]">
                Select Or Drag Images Here
              </p>
              <label
                htmlFor="file-upload"
                className="cursor-pointer px-6 py-2 bg-[#0C2F55] text-white  hover:bg-blue-600 transition"
              >
                Select Images
              </label>
            </div>
            <div className="flex justify-center items-center">
              <div className="">
                <label htmlFor="">size</label>
                <input
                  value="100"
                  type="number"
                  className="border-2 border-[#0C2F55] py-1"
                />
                <span className="bg-[#0C2f55] text-white p-1 py-2">KB</span>
              </div>
              <button className="bg-[#0C2F55] ml-3 text-white px-3 py-2 rounded-full">
                Compress & Download
              </button>
            </div>

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
          </div>
          <div className="flex flex-col">
            <div className="right-side rounded-md bg-white p-5 w-64 h-32 mt-20">
              <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-4">
                Web Image Converter
              </button>
            </div>
            <div className="right-side bg-white p-5 w-64  mt-20">
              <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
                Compress PNG to 1MB
              </button>
              <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
                Compress Jpeg to 500kb
              </button>
              <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
                Compress Jpeg to 300kb
              </button>
              <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
                Compress Jpeg to 200kb
              </button>
              <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
                Compress Jpeg to 100kb
              </button>
              <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
                Compress Jpeg to 50kb
              </button>
              <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
                Compress Jpeg to 30kb
              </button>
              <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
                Compress Jpeg to 20kb
              </button>
              <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
                Compress Jpeg to 15kb
              </button>
              <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
                Compress Jpeg to 10kb
              </button>
              <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
                Compress PNG to 10kb
              </button>
              <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
                Compress PNG to 400kb
              </button>
              <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
                Compress GIF to 256kb
              </button>
              <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
                Compress GIF to 1MB
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCompressor;
