import React from "react";
import {
  FaCompress,
  FaFileAlt,
  FaEnvelope,
  FaInfoCircle,
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0C2F55] to-[#051629] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <img
                src="https://compresskaru.com/wp-content/uploads/2022/11/compresskaru-logo.png"
                alt="Logo"
              />
            </h3>
            <p className="text-sm">
              Quickly compress your images without losing image quality
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#F79422]">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#F79422] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F79422] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F79422] transition-colors">
                  Help & Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#F79422]">Top Tools</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#F79422] transition-colors">
                  JPEG To 500KB
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F79422] transition-colors">
                  JPEG To 200KB
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F79422] transition-colors">
                  PNG To 100KB
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F79422] transition-colors">
                  3000x3000 Image Converter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#F79422]">PDF Tools</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#F79422] transition-colors">
                  PDF converter 100 kb
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F79422] transition-colors">
                  PDF compress 200kb
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F79422] transition-colors">
                  Compress PDF to 300kb
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F79422] transition-colors">
                  Compress PDF to 400kb
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; 2024 All Rights Reserved | compresskaru.com
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-sm hover:text-[#F79422] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#F79422] transition-colors"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
