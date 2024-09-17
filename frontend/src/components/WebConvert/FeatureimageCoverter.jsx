import React, { useEffect, useState } from 'react';
import imageCompression from "browser-image-compression";

function FeatureimageCoverter() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [compressedFile, setCompressedFile] = useState(null);
    const [compressedFileURL, setCompressedFileURL] = useState(null);
    const [format, setFormat] = useState('webp');
    const [articles, setArticles] = useState([]);  // State to hold fetched articles
    const [loading, setLoading] = useState(true);  // Loading state
    const [error, setError] = useState(null);      // Error state
    const [currentArticleIndex, setCurrentArticleIndex] = useState(0); // Track current article index

    // Fetch articles with category "Image Converter"
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://backendimagecompressor.bahrainindustrial.com/api/articles/category/Image Converter');
                const data = await response.json();

                if (response.ok) {
                    setArticles(data);  // Set fetched articles
                } else {
                    setError(data.message);  // Handle error if any
                }
            } catch (err) {
                setError("Error fetching articles.");
            } finally {
                setLoading(false);  // Stop loading after the fetch is done
            }
        };
        fetchArticles();
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const maxSize = 5 * 1024 * 1024; // 5MB limit for image display

        if (file.size > maxSize) {
            alert('Image size is too large! Please choose a file smaller than 5MB.');
            return;
        }

        setSelectedFile(file);
        setCompressedFile(null); // Reset compressed file when a new image is selected
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const sizeInKB = parseInt(document.getElementById("size-input").value);

        if (selectedFile) {
            try {
                const options = {
                    maxSizeMB: sizeInKB / 1024, // Convert KB to MB
                    useWebWorker: true,
                };

                const compressedImage = await imageCompression(selectedFile, options);
                setCompressedFile(compressedImage);
                setCompressedFileURL(URL.createObjectURL(compressedImage));
            } catch (error) {
                console.error("Error compressing image:", error);
            }
        }
    };

    const handleConvert = async (format) => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append("image", selectedFile);

        let endpoint = '';
        if (format === 'webp') endpoint = '/convert-image-to-webp';
        else if (format === 'png') endpoint = '/convert-image-to-png';
        else if (format === 'jpg') endpoint = '/convert-image-to-jpg';

        try {
            const response = await fetch(`https://backendimagecompressor.bahrainindustrial.com/api/articles${endpoint}`, {
                method: 'POST',
                body: formData,
            });

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `converted_image.${format}`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error converting image:", error);
        }
    };

    // Function to handle Next button click
    const handleNextArticle = () => {
        if (currentArticleIndex < articles.length - 1) {
            setCurrentArticleIndex(currentArticleIndex + 1);
        }
    };

    // Function to handle Previous button click
    const handlePreviousArticle = () => {
        if (currentArticleIndex > 0) {
            setCurrentArticleIndex(currentArticleIndex - 1);
        }
    };

    return (
        <section className="bg-gray-100">
            <div className="container mx-auto">
                <div className="flex gap-5">
                    {/* **** Show Articles **** */}
                    {loading ? (
                        <p>Loading articles...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : (
                        <>
                            {articles.length > 0 && (
                                <div className="left-side rounded mt-20 bg-white p-5 pt-20 flex-grow overflow-auto">
                                    <h1 className="text-3xl mb-20 pb-20 font-semibold mb-6">{articles[currentArticleIndex].title}</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mt-20 border-2 hover:border-dotted border-[#0C2F55] rounded p-4 mb-4 text-center">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                id="file-upload"
                                                onChange={handleFileChange}
                                                required
                                            />
                                            <p className="mb-6 text-gray-500 text-[18px]">
                                                Select Or Drag Images Here
                                            </p>
                                            <label
                                                htmlFor="file-upload"
                                                className="cursor-pointer px-6 py-2 bg-[#0C2F55] hover:bg-[#F79422] text-white transition"
                                            >
                                                Select Image
                                            </label>
                                        </div>
                                    </form>

                                    {/* Conversion Buttons */}
                                    <div className="flex justify-center gap-4 mt-6">
                                        <button
                                            onClick={() => handleConvert('webp')}
                                            className="bg-[#F79422] hover:bg-[#0C2F55] text-white px-6 py-2 rounded-full"
                                        >
                                            Convert to WebP
                                        </button>
                                        <button
                                            onClick={() => handleConvert('png')}
                                            className="bg-[#F79422] hover:bg-[#0C2F55] text-white px-6 py-2 rounded-full"
                                        >
                                            Convert to PNG
                                        </button>
                                        <button
                                            onClick={() => handleConvert('jpg')}
                                            className="bg-[#F79422] hover:bg-[#0C2F55] text-white px-6 py-2 rounded-full"
                                        >
                                            Convert to JPG
                                        </button>
                                    </div>
                                    <div className="mt-10 text-xl p-4">
                                        {/* Rendering HTML safely */}
                                        <div dangerouslySetInnerHTML={{ __html: articles[currentArticleIndex].discripition }} />
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="flex justify-between mt-10">
                                        <button
                                            onClick={handlePreviousArticle}
                                            disabled={currentArticleIndex === 0}
                                            className={`px-4 py-2 rounded-full ${currentArticleIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#F79422] hover:bg-[#0C2F55] text-white'}`}
                                        >
                                            Previous
                                        </button>
                                        <button
                                            onClick={handleNextArticle}
                                            disabled={currentArticleIndex === articles.length - 1}
                                            className={`px-4 py-2 rounded-full ${currentArticleIndex === articles.length - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#F79422] hover:bg-[#0C2F55] text-white'}`}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
 
export default FeatureimageCoverter;
