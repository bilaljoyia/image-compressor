import React from "react";
import Buttons from "../Buttons";
import FAQSection from "../Home/FAQ";
import Featuregifcompressor from "./Featuregifcompressor";

function GifCompressor() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="left-side mb-6 rounded mt-4 lg:mt-20 bg-white p-4 lg:p-8 shadow-md flex-grow overflow-auto">
              <div>
                <h1 className="text-2xl lg:text-3xl font-semibold mb-6 lg:mb-10">
                  GIF Compressor
                </h1>
              </div>
              <Featuregifcompressor />
              <div className="mt-12 lg:mt-20">
                <FAQSection />
              </div>
            </div>
            <div className="lg:w-1/4 mx-auto">
              <Buttons />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GifCompressor;
