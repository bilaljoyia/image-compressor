import React from "react";
import {
  FaFileImage,
  FaInfoCircle,
  FaCompressArrowsAlt,
  FaStar,
} from "react-icons/fa";

const FormatCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-bold ml-3">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ImageFormatGuide = () => {
  return (
    <div className="bg-gradient-to-br mt-10 from-blue-100 to-indigo-300 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-800">
          Understanding Image Formats and Compression
        </h1>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-700">
            Different Types of File Formats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FormatCard
              title="JPEG/JPG"
              description="Lossy compression format ideal for photographs, released in 1992."
              icon={<FaFileImage className="text-3xl text-blue-500" />}
            />
            <FormatCard
              title="PNG"
              description="Lossless compression format great for web graphics with transparency."
              icon={<FaFileImage className="text-3xl text-green-500" />}
            />
            <FormatCard
              title="GIF"
              description="Lossless format supporting animations, limited to 256 colors."
              icon={<FaFileImage className="text-3xl text-yellow-500" />}
            />
            <FormatCard
              title="WebP"
              description="Modern format offering superior compression for web images."
              icon={<FaFileImage className="text-3xl text-purple-500" />}
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-700">
            Types of Image Compression
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaCompressArrowsAlt className="text-blue-500 mr-2" />
                Lossless Compression
              </h3>
              <p className="text-gray-600">
                Lossless compression is the procedure to resize the image within
                the same quality. It is used to compress the image without
                damaging its pixels. Usually, the picture taken with the DSLR
                camera have large in size. Such kind of images are not easy to
                manage as it take more space or storage. In addition, pictures
                taken with DSLR or any similar device are quiet bigger and you
                can’t upload these images on online platform due to size
                limitations.
              </p>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaCompressArrowsAlt className="text-green-500 mr-2" />
                Lossy Compression
              </h3>
              <p className="text-gray-600">
                While on the other hand, lossy compression remove some parts of
                an image in such a way that it won’t look bad during resizing
                it. Moreover, you can clear out some pieces and the bits of an
                image that affect the image quality.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-700">
            How To Reduce JPEG Size Online?
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Upload your image to our online JPEG compressor tool.</li>
              <li>Select the desired size for resizing.</li>
              <li>Preview the dimensions.</li>
              <li>Click on "Compress".</li>
              <li>
                Download your compressed image in the same quality as the
                original.
              </li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-indigo-700">
            What's New in Best Online Image Compressor
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
              <div
                key={index}
                className="bg-white rounded-lg shadow p-4 flex items-center"
              >
                <FaStar className="text-yellow-400 mr-2" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImageFormatGuide;
