import React, { useState, useEffect } from "react";
import FeaturesResize from "./FeaturesResize";
import FAQSection from "../Home/FAQ";
import Buttons from "../Buttons";

function Resize() {
  const [articles, setArticles] = useState([]);  // State to hold fetched articles
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state

  // Fetch articles with category "resize"
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://backendimagecompressor.bahrainindustrial.com/api/articles/category/Resize');
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

  // Get the first article if available
  const firstArticle = articles.length > 0 ? articles[0] : null;

  return (
    <div>
      <section className="bg-gray-100">
        <div className="container mx-auto">
          <div className="flex gap-5">
            <div className="left-side mb-6 rounded mt-20 bg-white p-5 shadow-md pt-20 flex-grow overflow-auto">
              {/* **** Show Article **** */}
              {loading ? (
                <p>Loading article...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : firstArticle ? (
                <div>
                  <h1 className="text-3xl font-semibold mb-10">
                    {firstArticle.title}
                  </h1>
                  <div className="mt-10 text-xl p-4">
                    {/* Rendering HTML safely */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: firstArticle.discripition,
                      }}
                    />
                  </div>
                </div>
              ) : (
                <p>No articles available</p>
              )}

              {/* Other Components */}
              <FeaturesResize />
              <FAQSection />
            </div>
            <Buttons />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resize;
