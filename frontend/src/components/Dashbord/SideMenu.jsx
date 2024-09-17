import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

function SideMenu() {
  return (
    <div className="w-54 bg-gray-800 h-screen fixed top-0 left-0">
      <div className="p-6 text-white">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul>
          <li className="mb-4">
            <Link
              to="/home"
              className="block py-2 px-4 rounded-md hover:bg-gray-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/articles"
              className="block py-2 px-4 rounded-md hover:bg-gray-700"
            >
              Articles
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
