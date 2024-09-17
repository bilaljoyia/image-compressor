import React, { useEffect, useState } from "react";
import FAQSection from "../Home/FAQ";
import Buttons from "../Buttons";
import { useParams } from "react-router-dom";

const ResizeArticle = () => {
  const { articleId } = useParams(); // Get article ID from URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: "",
    height: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          setImageDimensions({
            width: img.width,
            height: img.height,
          });
        };
      };

      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };

      reader.readAsDataURL(file); // Read file as Data URL
    }
  };


  // Fetch single article data
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://backendimagecompressor.bahrainindustrial.com/api/articles/${articleId}`);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const width = parseInt(document.getElementById("width-input").value);
    const height = parseInt(document.getElementById("height-input").value);

    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("image", selectedFile);
        formData.append("width", width);
        formData.append("height", height);

        const response = await fetch("https://backendimagecompressor.bahrainindustrial.com/resize-image", {
          method: "POST",
          body: formData,
        });

        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);

        // Trigger download
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = selectedFile.name; // Same filename as original
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error resizing image:", error);
      }
    }
  };

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <div className="flex gap-5">
          <div className="left-side mb-6 rounded mt-20 bg-white p-5 shadow-md pt-20 flex-grow overflow-auto">
          <div>
              {loading ? (
                <p>Loading article...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : article ? (
                <>
            <h1 className="text-3xl font-semibold mb-52">
              {article.title}
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

              {/* Width and Height Inputs */}
              <div className="flex justify-center items-center gap-3">
                <div>
                  <label htmlFor="width-input" className="text-xl mr-2">
                    Width:
                  </label>
                  <input
                    id="width-input"
                    type="number"
                    className="border-2 border-[#0C2F55] py-1 px-2"
                    value={imageDimensions.width}
                    onChange={(e) =>
                      setImageDimensions({
                        ...imageDimensions,
                        width: e.target.value,
                      })
                    }
                    required
                  />
                  <span className="ml-2">px</span>
                </div>

                <div>
                  <label htmlFor="height-input" className="text-xl mr-2">
                    Height:
                  </label>
                  <input
                    id="height-input"
                    type="number"
                    className="border-2 border-[#0C2F55] py-1 px-2"
                    value={imageDimensions.height}
                    onChange={(e) =>
                      setImageDimensions({
                        ...imageDimensions,
                        height: e.target.value,
                      })
                    }
                    required
                  />
                  <span className="ml-2">px</span>
                </div>
              </div>

              {/* Submit and Download Buttons */}
              <div className="mt-5 flex justify-center">
                <button
                  type="submit"
                  className="mb-5 bg-[#0C2F55] hover:scale-105 transition-all duration-300 text-white px-7 py-2 rounded-full"
                >
                  Resize and Download
                </button>
              </div>
            </form>

            {/* **** Article **** */}
            
                  <div
                    className="article-content mt-7"
                    dangerouslySetInnerHTML={{ __html: article.discripition }}
                  />
                </>
              ) : (
                <p>No article found.</p>
              )}
            </div>
            <FAQSection />
          </div>

          
          <Buttons />
        </div>
      </div>
    </section>
  );
};

export default ResizeArticle;
