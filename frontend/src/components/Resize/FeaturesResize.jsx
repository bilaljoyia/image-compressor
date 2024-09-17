import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FeaturesResize() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Tracks current page
  const articlesPerPage = 6; // Number of articles per page

  // Fetch articles
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://backendimagecompressor.bahrainindustrial.com/api/articles/category/Resize-card');
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

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Handle Next button click
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle Previous button click
  const handlePreviousPage = () => {
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
              <>
                {currentArticles.map((article) => (
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
                        to={`/resizeReadmore/${article._id}`} // Passing article ID
                      >
                        Read More
                      </Link>
                    </p>
                  </section>
                ))}

                {/* Pagination Controls */}
                <div className="flex justify-between items-center mt-8">
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-full ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#F79422] hover:bg-[#0C2F55] text-white'}`}
                  >
                    Previous
                  </button>
                  
                  {/* Display Current Page and Total Pages */}
                  <span className="text-lg font-medium">
                    Page {currentPage} of {totalPages}
                  </span>
                  
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-full ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#F79422] hover:bg-[#0C2F55] text-white'}`}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

export default FeaturesResize;
