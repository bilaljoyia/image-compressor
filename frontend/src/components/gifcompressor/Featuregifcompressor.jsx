import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Featuregifcompressor() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
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
            articles.map((article) => (
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
      </div>
    </article>
  </div>
  )
}

export default Featuregifcompressor