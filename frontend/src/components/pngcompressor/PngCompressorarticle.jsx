import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Buttons from "../Buttons";
import imageCompression from "browser-image-compression";
import FAQSection from "../Home/FAQ";

function PngCompressorarticle() {
  const { articleId } = useParams(); // Get article ID from URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Fetch single article data
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
  const [selectedFile, setSelectedFile] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [compressedFileURL, setCompressedFileURL] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setCompressedFile(null); // Reset compressed file when new image is selected
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
  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="left-side mb-6 rounded mt-20 bg-white p-5 shadow-md pt-20 flex-grow overflow-auto w-full lg:w-3/4">
            <div>
              {loading ? (
                <p>Loading article...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : article ? (
                <>
                  <h1 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12">
                    {article.title}
                  </h1>
                  {/* Image Preview Section */}
                  <div className="mb-4 text-center">
                    {selectedFile && (
                      <div className="flex flex-col md:flex-row justify-center items-center mb-6">
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Selected"
                          className="w-[500px] h-[300px] object-cover border-2 border-[#0C2F55] rounded mb-4 md:mb-0"
                        />
                        {compressedFile && (
                          <>
                            <span className="mx-4 text-2xl md:text-3xl font-bold my-2 md:my-0">
                              vs
                            </span>
                            <img
                              src={compressedFileURL}
                              alt="Compressed"
                              className="w-[500px] h-[300px] object-cover border-2 border-[#F79422] rounded"
                            />
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="mb-6">
                    <div className="border-2 hover:border-dotted border-[#0C2F55] rounded p-4 mb-4 text-center">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="file-upload"
                        onChange={handleFileChange}
                        required
                      />
                      <p className="mb-6 text-gray-500 text-base md:text-lg">
                        Select Or Drag Images Here
                      </p>
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer px-4 py-2 bg-[#0C2F55] hover:bg-[#F79422] text-white transition text-sm md:text-base"
                      >
                        Select Images
                      </label>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                      <div className="flex items-center">
                        <label htmlFor="size-input" className="mr-2">
                          Size
                        </label>
                        <input
                          id="size-input"
                          type="number"
                          className="border-2 border-[#0C2F55] py-1 px-2 w-24"
                          placeholder="KB"
                          required
                        />
                        <span className="bg-[#0C2f55] text-white p-1 py-2">
                          KB
                        </span>
                      </div>
                      <button
                        type="submit"
                        className="bg-[#0C2F55] hover:scale-105 transition-all duration-300 text-white px-6 py-2 rounded-full text-sm md:text-base"
                      >
                        Compress
                      </button>
                    </div>
                  </form>

                  {/* Download Button */}
                  {compressedFile && (
                    <div className="text-center mt-6">
                      <a
                        href={compressedFileURL}
                        download={compressedFile.name}
                        className="bg-[#F79422] hover:bg-[#0C2F55] text-white px-4 py-2 rounded-full text-sm md:text-base inline-block"
                      >
                        Download Compressed Image
                      </a>
                    </div>
                  )}

                  {/* Article Content */}
                  <div
                    className="article-content mt-7 text-base md:text-lg"
                    dangerouslySetInnerHTML={{ __html: article.discripition }}
                  />
                </>
              ) : (
                <p>No article found.</p>
              )}
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
}

export default PngCompressorarticle;
