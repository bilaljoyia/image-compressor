import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from backend
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:5005/api/articles");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        const response = await fetch(`http://localhost:5005/api/articles/${id}`, {
          method: "DELETE",
        });
        const data = await response.json();
        if (response.ok) {
          alert("Article deleted successfully!");
          setArticles(articles.filter((article) => article._id !== id));
        } else {
          alert("Error deleting article: " + data.message);
        }
      } catch (error) {
        console.error("Error deleting article:", error);
      }
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-6">
        <h2 className="text-2xl font-semibold text-white mb-6">Navigation</h2>
        <ul>
          <li className="mb-4">
            <Link to="/dashboard" className="text-lg text-white hover:text-indigo-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/articles"
              className="text-lg text-white hover:text-indigo-300"
            >
              Articles
            </Link>
          </li>
        </ul>
      </div>

      {/* Articles List */}
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold text-white mb-8">Articles</h1>
        <table className="min-w-full bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
          <thead>
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article._id}>
                <td className="py-3 px-4">{article.title}</td>
                <td className="py-3 px-4">{article.category}</td>
                <td className="py-3 px-4">
                  <Link
                    to={`/edit-article/${article._id}`}
                    className="text-indigo-500 hover:text-indigo-700"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(article._id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Articles;
