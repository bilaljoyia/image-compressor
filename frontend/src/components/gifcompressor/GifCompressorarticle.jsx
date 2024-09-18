import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Buttons from "../Buttons";
import imageCompression from "browser-image-compression";
import FAQSection from "../Home/FAQ";

function GifCompressorarticle() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [compressedFileURL, setCompressedFileURL] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `https://backendimagecompressor.bahrainindustrial.com/api/articles/${articleId}`
        );
        const data = await response.json();
        if (response.ok) {
          setArticle(data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("Error fetching article.");
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [articleId]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setCompressedFile(null);
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
        setCompressedFileURL(URL.createObjectURL(compressedImage));
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
            {loading ? (
              <p className="text-center text-lg">Loading article...</p>
            ) : error ? (
              <p className="text-center text-lg text-red-500">Error: {error}</p>
            ) : article ? (
              <>
                <h1 className="text-2xl lg:text-3xl font-semibold mb-8">
                  {article.title}
                </h1>
                <div className="mb-8 text-center">
                  {selectedFile && (
                    <div className="flex flex-col sm:flex-row justify-center items-center mb-6">
                      <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Selected"
                        className="w-24 h-24 object-cover border-2 border-[#0C2F55] rounded mb-4 sm:mb-0 sm:mr-4"
                      />
                      <span className="mx-4 text-3xl font-bold">vs</span>
                      {compressedFile && (
                        <img
                          src={compressedFileURL}
                          alt="Compressed"
                          className="w-24 h-24 object-cover border-2 border-[#F79422] rounded"
                        />
                      )}
                    </div>
                  )}
                </div>

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
                      <span className="bg-[#0C2f55] text-white p-1 py-2">
                        KB
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#0C2F55] hover:scale-105 transition-all duration-300 text-white px-6 py-2 rounded-full"
                    >
                      Compress
                    </button>
                  </div>
                </form>

                {compressedFile && (
                  <div className="text-center mt-6 mb-8">
                    <a
                      href={compressedFileURL}
                      download={compressedFile.name}
                      className="bg-[#F79422] hover:bg-[#0C2F55] text-white px-6 py-2 rounded-full inline-block"
                    >
                      Download Compressed Image
                    </a>
                  </div>
                )}

                <div className="article-content mt-8 text-base lg:text-lg">
                  <div
                    dangerouslySetInnerHTML={{ __html: article.discripition }}
                  />
                </div>
              </>
            ) : (
              <p className="text-center text-lg">No article found.</p>
            )}
            <FAQSection />
          </div>
          <div className="lg:w-1/4 mx-auto">
            <Buttons />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GifCompressorarticle;
