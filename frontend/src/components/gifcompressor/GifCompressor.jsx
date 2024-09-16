import React from 'react'
import Buttons from "../Buttons";
import FAQSection from "../Home/FAQ";
import Featuregifcompressor from './Featuregifcompressor';


function GifCompressor() {
  return (
    <div>
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <div className="flex gap-5">
          <div className="left-side mb-6 rounded mt-20 bg-white p-5 shadow-md pt-20 flex-grow overflow-auto">
                <div>
                  <h1 className="text-3xl font-semibold mb-10">GIF Compressor</h1>
                </div>
            <Featuregifcompressor/>
            <FAQSection />
          </div>
          <Buttons />
        </div>
      </div>
    </section>
  </div>
  ) 
}

export default GifCompressor