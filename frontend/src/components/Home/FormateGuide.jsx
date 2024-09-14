import React from "react";
import { FaFileImage, FaCompressArrowsAlt, FaStar } from "react-icons/fa";

const ImageFormatGuide = () => {
  return (
    <article className="bg-gradient-to-br mt-10 rounded-md from-blue-100 to-indigo-300 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-800">
          Understanding Image Formats and Compression
        </h1>

        <section className="mb-2 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-indigo-700">
            Different Types of File Formats
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <FaFileImage className="text-blue-500 mr-2" /> JPEG/JPG
              </h3>
              <p className="text-gray-600">
                Lossy compression format ideal for photographs, released in
                1992.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <FaFileImage className="text-green-500 mr-2" /> PNG
              </h3>
              <p className="text-gray-600">
                Lossless compression format great for web graphics with
                transparency.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <FaFileImage className="text-yellow-500 mr-2" /> GIF
              </h3>
              <p className="text-gray-600">
                Lossless format supporting animations, limited to 256 colors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <FaFileImage className="text-purple-500 mr-2" /> WebP
              </h3>
              <p className="text-gray-600">
                Modern format offering superior compression for web images.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-2 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-indigo-700">
            Types of Image Compression
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaCompressArrowsAlt className="text-blue-500 mr-2" />
                Lossless Compression
              </h3>
              <p className="text-gray-600">
                Lossless compression is the procedure to resize the image within
                the same quality. It is used to compress the image without
                damaging its pixels. Usually, pictures taken with DSLR cameras
                have large file sizes. Such images are not easy to manage as
                they take up more space or storage. In addition, pictures taken
                with DSLR or any similar device are quite large, and you can't
                upload these images on online platforms due to size limitations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaCompressArrowsAlt className="text-green-500 mr-2" />
                Lossy Compression
              </h3>
              <p className="text-gray-600">
                On the other hand, lossy compression removes some parts of an
                image in such a way that it won't look bad during resizing.
                Moreover, you can clear out some pieces and bits of an image
                that affect the image quality.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-2 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-indigo-700">
            How To Reduce JPEG Size Online?
          </h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 pl-4">
            <li>Upload your image to our online JPEG compressor tool.</li>
            <li>Select the desired size for resizing.</li>
            <li>Preview the dimensions.</li>
            <li>Click on "Compress".</li>
            <li>
              Download your compressed image in the same quality as the
              original.
            </li>
          </ol>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-indigo-700">
            What's New in Best Online Image Compressor
          </h2>
          <ul className="grid grid-cols-2 gap-4">
            {[
              "Attractive design",
              "Smooth usability",
              "Encrypted sharing",
              "100% Secure",
              "Fast compression",
              "Updated algorithms",
              "Better quality",
              "Actual size compression",
              "Easy upload & download",
              "Batch upload",
              "Single click resizer",
              "& much more..",
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <FaStar className="text-yellow-400 mr-2" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
};

export default ImageFormatGuide;
