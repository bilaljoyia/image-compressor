import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Featuregifcompressor() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const articlesPerPage = 6; // Display 6 articles per page
  
    // Fetch articles
    useEffect(() => {
      const fetchArticles = async () => {
        try {
          const response = await fetch('http://localhost:5005/api/articles/category/GIF Compressor');
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

    // Calculate range for current page
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
    
    // Handle next page
    const nextPage = () => {
      if (currentPage < Math.ceil(articles.length / articlesPerPage)) {
        setCurrentPage(currentPage + 1);
      }
    };

    // Handle previous page
    const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

  return (
    <div>
      <article className="bg-gradient-to-br rounded-md mt-5 from-[#0C2F55] via-[#1E5080] to-[#3A72A5] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {loading ? (
              <p>Loading articles...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              currentArticles.map((article) => (
                <section className="bg-white rounded-lg p-6" key={article._id}>
                  <div className="flex items-center mb-4">
                    <h2 className="text-2xl text-black font-semibold">{article.title}</h2>
                  </div>
                  <p className="text-black">
                    <div 
                      className="article-preview" 
                      dangerouslySetInnerHTML={{ __html: article.discripition + "..." }}
                    />
                    <Link
                      className="text-blue-400 font-semibold"
                      to={`/gif-imagecompressor/${article._id}`} // Passing article ID
                    >
                      Read More
                    </Link>
                  </p>
                </section>
              ))
            )}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 bg-[#0C2F55] text-white rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#F79422]"}`}
            >
              Previous
            </button>

            <button
              onClick={nextPage}
              disabled={currentPage === Math.ceil(articles.length / articlesPerPage)}
              className={`px-4 py-2 bg-[#0C2F55] text-white rounded ${currentPage === Math.ceil(articles.length / articlesPerPage) ? "opacity-50 cursor-not-allowed" : "hover:bg-[#F79422]"}`}
            >
              Next
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Featuregifcompressor;
