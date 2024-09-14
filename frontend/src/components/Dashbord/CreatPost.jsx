import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

function CreatPost() {
  const editor = useRef(null);
  const [content, setContent] = useState('');  // For handling description
  const [handle, setHandle] = useState({
    category: '',
    title: '',
  });

  // Handle input fields
  const handleInput = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const postData = {
      ...handle,
      discripition: content  // Adding the JoditEditor content
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

        <div className="input-group">
          <input
            name="category"
            type="text"
            value={handle.category}
            onChange={handleInput}
            placeholder="Category"
            className="input-field"
            required
          />
        </div>

        <div className="editor-container">
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>

        <div className="input-group">
          <button type="submit" className="submit-button">Post</button>
        </div>
      </form>
    </div>
  );
}

export default CreatPost;
