import React from "react";
import Buttons from "../Buttons";
import FAQSection from "../Home/FAQ";
import FeatureimageCoverter from "./FeatureimageCoverter";

function ImageCoverter() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="left-side mb-6 rounded mt-4 lg:mt-8 bg-white p-4 lg:p-8 shadow-md flex-grow overflow-auto">
              <FeatureimageCoverter />
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

export default ImageCoverter;
