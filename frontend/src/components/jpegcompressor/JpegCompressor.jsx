import React from "react";
import FeaturesJPEG from "./FeaturesJPEG";
import FAQSection from "../Home/FAQ";
import Buttons from "../Buttons";
function JpegCompressor() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <div className="flex gap-5">
          <div className="left-side mb-6 rounded mt-20 bg-white p-5 shadow-md pt-20 flex-grow overflow-auto">
            <h1 className="text-3xl font-semibold mb-10">
              JPEG Image Compressor
            </h1>

            {/* **** Article **** */}

            <FeaturesJPEG />
            <FAQSection />
          </div>
          <Buttons />
        </div>
      </div>
    </section>
  );
}

export default JpegCompressor;
