import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

import { FaSearch, FaChevronDown } from "react-icons/fa";

function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <header className="bg-[#0C2F55] py-4">
      <nav>
        <ul className="container mx-auto flex items-center justify-between">
          <div>
            <img
              src="https://compresskaru.com/wp-content/uploads/2022/11/compresskaru-logo.png"
              alt="Logo"
            />
          </div>
          <div className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-gray-300">
                Resize
              </a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-300">
                PDF Converter
              </a>
            </li>
            <li className="relative group">
              <a
                href="/"
                className="text-white hover:text-gray-300 flex items-center"
              >
                JPEG Compressor <FaChevronDown className="ml-1 mt-1 text-sm" />
              </a>
              <ul className="absolute w-44 rounded border-2 border-blue-200 left-0 bg-[#6070B1]  text-white shadow-md py-2 mt-1 hidden group-hover:block">
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-[#0C2F55]">
                    JPEG to 1MB
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-[#0C2F55]">
                    JPEG to 500KB
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-[#0C2F55]">
                    JPEG to 200KB
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-[#0C2F55]">
                    JPEG to 100KB
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a
                href="/"
                className="text-white hover:text-gray-300 flex items-center"
              >
                PNG Compressor <FaChevronDown className="ml-1 mt-1 text-sm" />
              </a>
              <ul className="absolute w-44 rounded border-2 border-blue-200 left-0 bg-[#6070B1] text-white shadow-md py-2 mt-1 hidden group-hover:block">
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-[#0C2F55]">
                    PNG 1MB
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-[#0C2F55]">
                    PNG 500KB
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-[#0C2F55]">
                    PNG 200KB
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-[#0C2F55]">
                    PNG 100KB
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a
                href="/"
                className="text-white hover:text-gray-300 flex items-center"
              >
                GIF Compressor <FaChevronDown className="ml-1 mt-1 text-sm" />
              </a>
              <ul className="absolute w-44 rounded border-2 border-blue-200 left-0 bg-[#6070B1] shadow-md py-2 mt-1 text-white hidden group-hover:block">
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-[#0C2F55]">
                    GIF 1MB
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-[#0C2F55]">
                    GIF 500KB
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-[#0C2F55]">
                    GIF 200KB
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-[#0C2F55]">
                    GIF 100KB
                  </a>
                </li>
              </ul>
            </li>
          </div>
          <div className="group relative">
            <input
              type="text"
              placeholder="Search"
              className="w-[200px] sm:w-[200px] text-black hover:w-[300px] 
              transition-all duration-300 border px-2 py-1
               border-gray-400 focus:outline-none focus:border-2 dark:border-gray-500 dark:text-white dark:bg-black focus:border-primary rounded-full"
            />
            <IoMdSearch className="absolute right-2 text-xl hover:text-primary top-2 text-black" />
          </div>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
