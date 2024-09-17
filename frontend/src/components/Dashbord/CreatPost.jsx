import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreatPost() {
  const [content, setContent] = useState("");
  const [handle, setHandle] = useState({ category: "", title: "" });
  const [categories, setCategories] = useState([
    "Pdf-Converter",
    "Resize-card",
    "JPED Compressor",
    "PNG Compressor",
    "GIF Compressor",
  ]);
  const [newCategory, setNewCategory] = useState("");
  const [showAddCategory, setShowAddCategory] = useState(false);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
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
    "link",
    "image",
  ];

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
      const response = await fetch("http://localhost:5005/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Article posted successfully!");
        // Reset form after successful post
        setHandle({
          category: "",
          title: "",
        });
        setContent("");
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error posting article:", error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600">
            <h2 className="text-2xl font-semibold text-white">
              Create New Post
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
              {" "}
              {/* Adjust the 300px value as needed */}
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Content
              </label>
              <div className="border border-gray-600 rounded-md overflow-hidden h-full">
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                  className="bg-gray-800 text-white h-full"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 text-lg font-semibold"
              >
                Publish Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CreatPost;
