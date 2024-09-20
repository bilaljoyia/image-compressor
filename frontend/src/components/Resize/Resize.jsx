import React, { useState, useEffect } from "react";
import FeaturesResize from "./FeaturesResize";
import FAQSection from "../Home/FAQ";
import Buttons from "../Buttons";

function Resize() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "http://localhost:5005/api/articles/category/Resize"
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

  const firstArticle = articles.length > 0 ? articles[0] : null;

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="left-side mb-6 rounded mt-4 lg:mt-20 bg-white p-4 lg:p-8 shadow-md flex-grow overflow-auto">
            {loading ? (
              <p className="text-center text-lg">Loading article...</p>
            ) : error ? (
              <p className="text-center text-lg text-red-500">Error: {error}</p>
            ) : firstArticle ? (
              <div>
                <h1 className="text-2xl lg:text-3xl font-semibold mb-6 lg:mb-10">
                  {firstArticle.title}
                </h1>
                <div className="mt-6 lg:mt-10 text-base lg:text-xl">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: firstArticle.discripition,
                    }}
                    className="prose max-w-none"
                  />
                </div>
              </div>
            ) : (
              <p className="text-center text-lg">No articles available</p>
            )}

            <div className="mt-12 lg:mt-20">
              <FeaturesResize />
            </div>
            <div className="mt-12 lg:mt-20">
              <FAQSection />
            </div>
          </div>
          <div className="lg:w-1/4 mx-auto">
            <Buttons />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resize;
