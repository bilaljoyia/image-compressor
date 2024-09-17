import React from 'react'
import Buttons from "../Buttons";
import FAQSection from "../Home/FAQ";
import FeatureimageCoverter from './FeatureimageCoverter';


function ImageCoverter() {
    return (
        <div>
            <section className="bg-gray-100">
                <div className="container mx-auto">
                    <div className="flex gap-5">
                        <div className="left-side mb-6 rounded  p-5 shadow-md bg-white flex-grow overflow-auto">
                            <FeatureimageCoverter />
                            <FAQSection />
                        </div>
                        <Buttons />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ImageCoverter;