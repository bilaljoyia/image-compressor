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
import JpegCompressorarticle from "./components/jpegcompressor/JpegCompressorarticle";
import PngCompressorarticle from "./components/pngcompressor/PngCompressorarticle";
import GifCompressorarticle from "./components/gifcompressor/GifCompressorarticle";
import ImageCoverter from "./components/WebConvert/ImageCoverter";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<CreatPost />} />

        <Route path="/resize" element={<Resize />} />
        <Route path="/resizeReadmore/:articleId" element={<ResizeArticle />} />

        <Route path="/pdf-converter" element={<PdfConverter />} />

        <Route path="/jpeg-image-compressor" element={<JpegCompressor />} />
        <Route
          path="/jpeg-imagecompressor/:articleId"
          element={<JpegCompressorarticle />}
        />

        <Route path="/png-image-compressor" element={<PngCompressor />} />
        <Route
          path="/png-imagecompressor/:articleId"
          element={<PngCompressorarticle />}
        />

        <Route path="/gif-image-compressor" element={<GifCompressor />} />
        <Route path="/gif-imagecompressor/:articleId" element={<GifCompressorarticle />} />

        <Route path="/web-converter" element={<ImageCoverter />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
