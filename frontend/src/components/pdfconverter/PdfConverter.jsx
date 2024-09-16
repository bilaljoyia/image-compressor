import React, { useEffect, useState } from "react";
import Buttons from "../Buttons";

const PdfConverter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [articles, setArticles] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleConvertToPDF = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("image", selectedFile);

        const response = await fetch("http://localhost:5005/convert-image-to-pdf", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "converted_image.pdf";
          document.body.appendChild(link);
          link.click();
          URL.revokeObjectURL(url); // Clean up the URL object
          document.body.removeChild(link);
        } else {
          console.error("Error converting image to PDF");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };


    // Error state

  // Fetch articles with category "resize"
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:5005/api/articles/category/Pdf-Converter');
        const data = await response.json();

        if (response.ok) {
          setArticles(data);  // Set fetched articles
        } else {
          setError(data.message);  // Handle error if any
        }
      } catch (err) {
        setError("Error fetching articles.");
      } finally {
        setLoading(false);  // Stop loading after the fetch is done
      }
    };

    fetchArticles();
  }, []);
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <div className="flex gap-5">
          {/* **** Show Articles **** */}
          {loading ? (
            <p>Loading articles...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            articles.map((article) => (
              <div key={article._id}>
                <div className="left-side mb-6 rounded mt-20 bg-white p-5 shadow-md pt-20 flex-grow overflow-auto">
                  <h1 className="text-3xl font-semibold mb-52">
                    {article.title}
                  </h1>
                  <form >
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
                        type="button"
                        onClick={handleConvertToPDF}
                        className="bg-[#0C2F55] hover:scale-105 transition-all duration-300 ml-3 text-white px-7 py-2 rounded-full"
                      >
                        Convert to PDF
                      </button>
                    </div>
                  </form>
                  <div className="mt-10 text-xl p-4">
                  {/* Rendering HTML safely */}
                  <div dangerouslySetInnerHTML={{ __html: article.discripition }} />
                </div>
                </div>
                
              </div>
            ))
          )}
          <Buttons />
        </div>
      </div>
    </section>
  );
};

export default PdfConverter;
