import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Home/Hero";
import CreatPost from "./components/Dashbord/CreatPost";
import Resize from "./components/Resize/Resize";
import PdfConverter from "./components/pdfconverter/PdfConverter";
import JpegCompressor from "./components/jpegcompressor/JpegCompressor";
import PngCompressor from "./components/pngcompressor/PngCompressor";
import GifCompressor from "./components/gifcompressor/GifCompressor";
import ResizeArticle from "./components/Resize/ResizeArticle";
import JpegArticle from "./components/jpegcompressor/JpegArticle";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<CreatPost />} />
        <Route path="/resize" element={<Resize />} />
        <Route path="/resizeReadmore" element={<ResizeArticle />} />
        <Route path="/pdf-converter" element={<PdfConverter />} />
        <Route path="/jpeg-image-compressor" element={<JpegCompressor />} />
        <Route path="/gpeg-compressor" element={<JpegArticle />} />
        <Route path="/png-image-compressor" element={<PngCompressor />} />
        <Route path="/gif-image-compressor" element={<GifCompressor />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
