import { Link } from "react-router-dom";

function Buttons() {
  return (
    <div className="flex flex-col">
      <div className="right-side rounded-md bg-white p-5 w-64 h-32 mt-20">
       <Link to="/web-converter" >
       <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-4">
          Web Image Converter
        </button>
       </Link> 
      </div>
      <div className="right-side bg-white p-5 w-64  mt-20">
        <Link to="/png-image-compressor">
        <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
          Compress PNG to 1MB
        </button>
        </Link>
        <Link to="/jpeg-image-compressor">
        <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
          Compress Jpeg to 500kb
        </button>
        </Link>
        <Link to="/jpeg-image-compressor">
        <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
          Compress Jpeg to 300kb
        </button>
        </Link>
        <Link to="/jpeg-image-compressor">
        <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
          Compress Jpeg to 200kb
        </button>
        </Link>
        <Link to="/jpeg-image-compressor">
        <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
          Compress Jpeg to 100kb
        </button>
        </Link>
        <Link to="/jpeg-image-compressor">
        <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
          Compress Jpeg to 50kb
        </button>
        </Link>
        <Link to="/jpeg-image-compressor">
        <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
          Compress Jpeg to 30kb
        </button>
        </Link>
        <Link to="/jpeg-image-compressor">
        <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
          Compress Jpeg to 20kb
        </button>
        </Link>
        <Link to="/jpeg-image-compressor">
        <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
          Compress Jpeg to 15kb
        </button>
        </Link>
        <Link to="/jpeg-image-compressor">
        <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
          Compress Jpeg to 10kb
        </button>
        </Link>
        <Link to="/png-image-compressor">
        <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
          Compress PNG to 10kb
        </button>
        </Link>
        <Link to="/png-image-compressor">
        <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
          Compress PNG to 400kb
        </button>
        </Link>
        <Link to="/gif-image-compressor">
        <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
          Compress GIF to 256kb
        </button>
        </Link>
        <Link to="/gif-image-compressor">
        <button className="text-center w-full font-semibold text-white bg-[#F79422] py-3 hover:bg-[#0C2F55] rounded-full mt-8">
          Compress GIF to 1MB
        </button></Link>
      </div>
    </div>
  );
}

export default Buttons;
