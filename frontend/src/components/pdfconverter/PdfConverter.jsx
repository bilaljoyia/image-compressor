import React, { useEffect, useState } from "react";
import Buttons from "../Buttons";

const PdfConverter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 1;

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleConvertToPDF = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("image", selectedFile);

        const response = await fetch(
          "https://backendimagecompressor.bahrainindustrial.com/convert-image-to-pdf",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "converted_image.pdf";
          document.body.appendChild(link);
          link.click();
          URL.revokeObjectURL(url);
          document.body.removeChild(link);
        } else {
          console.error("Error converting image to PDF");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://backendimagecompressor.bahrainindustrial.com/api/articles/category/Pdf-Converter"
        );
        const data = await response.json();

        if (response.ok) {
          setArticles(data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("Error fetching articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const totalArticles = articles.length;
  const totalPages = Math.ceil(totalArticles / articlesPerPage);
  const currentArticle = articles[currentPage - 1];

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-5">
          {loading ? (
            <p className="text-center text-lg">Loading articles...</p>
          ) : error ? (
            <p className="text-center text-lg text-red-500">Error: {error}</p>
          ) : (
            currentArticle && (
              <div className="left-side mb-6 rounded mt-4 lg:mt-20 bg-white p-4 lg:p-8 shadow-md flex-grow overflow-auto">
                <h1 className="text-2xl lg:text-3xl font-semibold mb-8 lg:mb-12">
                  {currentArticle.title}
                </h1>
                <form className="mb-8">
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
                  <div className="flex justify-center items-center">
                    <button
                      type="button"
                      onClick={handleConvertToPDF}
                      className="bg-[#0C2F55] hover:scale-105 transition-all duration-300 text-white px-6 lg:px-7 py-2 rounded-full"
                    >
                      Convert to PDF
                    </button>
                  </div>
                </form>
                <div className="mt-8 lg:mt-10 text-base lg:text-xl">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: currentArticle.discripition,
                    }}
                    className="prose max-w-none"
                  />
                </div>
                <div className="flex justify-between items-center mt-8 lg:mt-12">
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-full ${
                      currentPage === 1
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-[#F79422] hover:bg-[#0C2F55] text-white"
                    }`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-full ${
                      currentPage === totalPages
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-[#F79422] hover:bg-[#0C2F55] text-white"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )
          )}
          <div className="lg:w-1/4 mx-auto">
            <Buttons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PdfConverter;
