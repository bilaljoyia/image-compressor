import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link, useParams, useNavigate } from "react-router-dom";

function CreatPost() {
  const [content, setContent] = useState("");
  const [handle, setHandle] = useState({ category: "", title: "" });
  const [categories, setCategories] = useState([
    "Pdf-Converter",
    "Resize-card",
    "JPEG Compressor",
    "PNG Compressor",
    "GIF Compressor",
    "Image Converter",
  ]);
  const [newCategory, setNewCategory] = useState("");
  const [showAddCategory, setShowAddCategory] = useState(false);
  const { id } = useParams(); // Get article ID from URL
  const navigate = useNavigate(); // To navigate programmatically

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "color",
    "background",
    "font",
    "align",
    "link",
    "image",
  ];

  useEffect(() => {
    if (id) {
      // If ID is present, fetch article data for editing
      const fetchArticle = async () => {
        try {
          const response = await fetch(`http://localhost:5005/api/articles/${id}`);
          const data = await response.json();
          setHandle({ category: data.category, title: data.title });
          setContent(data.discripition); // Assuming the field name is `discripition`
        } catch (error) {
          console.error("Error fetching article:", error);
        }
      };
      fetchArticle();
    }
  }, [id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
  };

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setHandle({ ...handle, category: newCategory });
      setNewCategory("");
      setShowAddCategory(false);
    } else {
      alert("Category already exists or input is empty");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      ...handle,
      discripition: content, // Adding the ReactQuill content
    };

    try {
      const method = id ? "PUT" : "POST"; // Use PUT if editing existing article
      const response = await fetch(`http://localhost:5005/api/articles${id ? `/${id}` : ''}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(id ? "Article updated successfully!" : "Article posted successfully!");
        navigate("/articles"); // Redirect to articles list after submission
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error posting article:", error);
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

      {/* Main Content */}
      <div className="w-5/6 pl-14">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600">
              <h2 className="text-2xl font-semibold text-white">
                {id ? "Edit Post" : "Create New Post"}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleInput}
                    placeholder="Enter post title"
                    value={handle.title}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Category
                  </label>
                  <div className="flex space-x-2">
                    <select
                      id="category"
                      name="category"
                      value={handle.category}
                      onChange={handleInput}
                      className="flex-grow px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    >
                      <option value="" disabled>
                        Select Category
                      </option>
                      {categories.map((category, index) => (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
                      onClick={() => setShowAddCategory(!showAddCategory)}
                    >
                      {showAddCategory ? "Cancel" : "New"}
                    </button>
                  </div>
                </div>
              </div>

              {showAddCategory && (
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="New Category Name"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="flex-grow px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    autoFocus
                  />
                  <button
                    type="button"
                    className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
                    onClick={handleAddCategory}
                  >
                    Add
                  </button>
                </div>
              )}

              <div className="h-[calc(100vh-300px)]">
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Content
                </label>
                <ReactQuill
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                  className="h-full"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  {id ? "Update Post" : "Create Post"}
                </button>
                <button
                  type="button"
                  className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-300"
                  onClick={() => navigate("/articles")}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatPost;
