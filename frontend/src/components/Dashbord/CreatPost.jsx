import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

function CreatPost() {
  const editor = useRef(null);
  const [content, setContent] = useState(''); // For handling description
  const [handle, setHandle] = useState({
    category: '',
    title: '',
  });
  const [categories, setCategories] = useState([
    'Pdf-Converter',
    'Resize-card',
    'JPED Compressor',
    'PNG Compressor',
    'GIF Compressor',
  ]);
  const [newCategory, setNewCategory] = useState('');
  const [showAddCategory, setShowAddCategory] = useState(false);

  // Handle input fields
  const handleInput = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
  };

  // Handle adding new category
  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setHandle({ ...handle, category: newCategory }); // Set the new category as selected
      setNewCategory(''); // Reset new category input
      setShowAddCategory(false); // Hide input after adding
    } else {
      alert('Category already exists or input is empty');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      ...handle,
      discripition: content, // Adding the JoditEditor content
    };

    try {
      const response = await fetch('http://localhost:5005/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Article posted successfully!');
        // Reset form after successful post
        setHandle({
          category: '',
          title: '',
        });
        setContent('');
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error posting article:', error);
    }
  };

  return (
    <div className="container2">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-group">
          <input
            name="title"
            type="text"
            onChange={handleInput}
            placeholder="Title"
            value={handle.title}
            className="input-field"
            required
          />
        </div>

        {/* Category Dropdown */}
        <div className="input-group">
          <select
            name="category"
            value={handle.category}
            onChange={handleInput}
            className="input-field"
            required
          >
            <option value="" disabled>Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Add New Category Button */}
          <button
            type="button"
            className="add-category-button"
            onClick={() => setShowAddCategory(!showAddCategory)}
          >
            {showAddCategory ? 'Cancel' : 'Add New Category'}
          </button>
        </div>

        {/* Input for adding new category */}
        {showAddCategory && (
          <div className="input-group add-category-input">
            <input
              type="text"
              placeholder="New Category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="input-field"
              autoFocus
            />
            <button
              type="button"
              className="submit-button mt-3"
              onClick={handleAddCategory}
            >
              Add
            </button>
          </div>
        )}

        {/* Jodit Editor for Description */}
        <div className="editor-container">
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>

        <div className="input-group">
          <button type="submit" className="submit-button">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatPost;
