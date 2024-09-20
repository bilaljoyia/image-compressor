import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaSearch, FaChevronDown, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#0C2F55] py-4">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://compresskaru.com/wp-content/uploads/2022/11/compresskaru-logo.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden md:flex space-x-4">
            <NavItems />
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars size={24} />
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <NavItems mobile />
          </div>
        )}
      </nav>
    </header>
  );
}

function NavItems({ mobile }) {
  const itemClass = mobile
    ? "block py-2 text-white hover:text-gray-300"
    : "text-white hover:text-gray-300";

  return (
    <ul className={mobile ? "space-y-2" : "flex space-x-4"}>
      <NavLink to="/" label="Home" itemClass={itemClass} />
      <NavLink to="/resize" label="Resize" itemClass={itemClass} />
      <NavLink
        to="/pdf-converter"
        label="PDF Converter"
        itemClass={itemClass}
      />
      <Link to="/jpeg-image-compressor">
      <DropdownNavItem
        
        label="JPEG Compressor"
        items={[
          "JPEG to 1MB",
          "JPEG to 500KB",
          "JPEG to 200KB",
          "JPEG to 100KB",
        ]}
        itemClass={itemClass}
        mobile={mobile}
      />
      </Link>
        
        <Link to="/png-image-compressor">
      <DropdownNavItem
        label="PNG Compressor"
        items={["PNG 1MB", "PNG 500KB", "PNG 200KB", "PNG 100KB"]}
        itemClass={itemClass}
        mobile={mobile}
      />
      </Link>
      <Link to="/gif-image-compressor">
      <DropdownNavItem
        
        label="GIF Compressor"
        items={["GIF 1MB", "GIF 500KB", "GIF 200KB", "GIF 100KB"]}
        itemClass={itemClass}
        mobile={mobile}
      />

      </Link>
    </ul>
  );
}

function NavLink({ to, label, itemClass }) {
  return (
    <li>
      <Link to={to} className={itemClass}>
        {label}
      </Link>
    </li>
  );
}

function DropdownNavItem({ to, label, items, itemClass, mobile }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={mobile ? "" : "relative group"}>
      <button
        className={`${itemClass} flex items-center`}
        onClick={() => mobile && setIsOpen(!isOpen)}
      >
        {label} <FaChevronDown className="ml-1 mt-1 text-sm" />
      </button>
      <ul
        className={`${
          mobile
            ? isOpen
              ? "block"
              : "hidden"
            : "absolute w-44 left-0 hidden group-hover:block"
        } bg-[#6070B1] text-white shadow-md py-2 mt-1 rounded border-2 border-blue-200`}
      >
        {items.map((item, index) => (
          <li key={index}>
            <Link to="/" className="block px-4 py-2 hover:bg-[#0C2F55]">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Header;
