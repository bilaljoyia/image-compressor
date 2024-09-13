import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden">
      <button
        className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        {isOpen ? (
          <FaChevronUp className="text-[#F79422]" />
        ) : (
          <FaChevronDown className="text-[#F79422]" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-white bg-opacity-5">
          <p className="text-gray-200">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question:
        "What is the maximum image size limit for the image compressor?",
      answer:
        "Indeed, there is no limitation on maximum uploading image size. You can upload and compress an image or a batch of images of any size.",
    },
    {
      question: "What type of image format can I compress?",
      answer:
        "You can resize any type of image file format like JPG, JPEG, PNG, and WebP using our image compressor tool.",
    },
    {
      question: "Does this tool save or store my uploaded images?",
      answer:
        "Undoubtedly not! We do not use/reuse or save any visitor's data to our database. As your data is private and confidential, you can use CompressKaru online JPG compressor without any mistrust.",
    },
    {
      question: "How does the online photo compressor work?",
      answer:
        "Our photo resizer is developed with new techniques and algorithms. It works smartly and efficiently. This tool compresses an image to the most accurate required size.",
    },
    {
      question: "Is it safe to use the online image compressor?",
      answer:
        "Yes! We ensure the privacy of your private data. We don't share your precious data with anyone. Use it peacefully.",
    },
    {
      question: "Why do I need to reduce the size of an image?",
      answer:
        "It's often not possible to upload JPG/JPEG images with larger sizes on online platforms. Websites like Upwork, Fiverr, Facebook, LinkedIn, etc. don't allow users to upload images that take up too much storage. Our online image reducer compresses the image size without losing its quality.",
    },
    {
      question: "Does the online image compressor tool work offline?",
      answer:
        "Certainly not, our tool is a web-based application. It only requires a stable internet connection for compression. We do not have any offline software like a JPG size reducer.",
    },
  ];

  return (
    <section className="bg-gradient-to-br mt-3 rounded-md from-[#0C2F55] via-[#1E5080] to-[#3A72A5] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
