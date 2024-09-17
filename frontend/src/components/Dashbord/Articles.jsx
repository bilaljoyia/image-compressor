import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./Sidebar";
import { FaHome, FaNewspaper } from "react-icons/fa";
import { toast } from "react-toastify";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from backend
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://backendimagecompressor.bahrainindustrial.com/api/articles");
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
        const response = await fetch(
          `https://backendimagecompressor.bahrainindustrial.com/api/articles/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        if (response.ok) {
          toast.error("Article Delete SuccessFully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
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
      <div className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white h-screen overflow-y-auto">
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-8 text-indigo-300">Dashboard</h2>
          <nav>
            <ul className="space-y-2">
              <SidebarItem to="/dashboard" icon={<FaHome />} text="Home" />
              <SidebarItem to="/articles" icon={<FaNewspaper />} text="Post" />
            </ul>
          </nav>
        </div>
      </div>
      {/* Articles List */}
      <div className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-white mb-8">Articles</h1>
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-600 to-purple-600">
                <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                  Title
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                  Category
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {articles.map((article) => (
                <tr
                  key={article._id}
                  className="hover:bg-gray-700 transition-colors duration-200"
                >
                  <td className="py-4 px-6 text-white whitespace-nowrap">
                    {article.title}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                      {article.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium">
                    <Link
                      to={`/edit-article/${article._id}`}
                      className="text-indigo-400 hover:text-indigo-300 mr-4 transition-colors duration-200"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(article._id)}
                      className="text-red-400 hover:text-red-300 transition-colors duration-200"
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
    </div>
  );
}

export default Articles;
