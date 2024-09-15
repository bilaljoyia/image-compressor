import React from "react";
import ResizeArticle from "./ResizeArticle";
import FeaturesResize from "./FeaturesResize";
import FAQSection from "../Home/FAQ";
import Buttons from "../Buttons";

function Resize() {
  return (
    <div>
      <section className="bg-gray-100">
        <div className="container mx-auto">
          <div className="flex gap-5">
            <div className="left-side mb-6 rounded mt-20 bg-white p-5 shadow-md pt-20 flex-grow overflow-auto">
              <h1 className="text-3xl font-semibold mb-10">Resize Image</h1>

              {/* **** Article **** */}
              <div>
                <p className="mt-10 text-xl p-4">
                  When it comes to the size of an image, these things matter a
                  lot. Mostly, you use PNG, JPG, JPEG, GIF, WebP, TIFF, etc
                  image file formats. Also, you have to post or publish these
                  images on social media (Facebook, Whatsapp, Instagram, or
                  Twitter), web posts, ad campaigns, or for printing media.
                  However, the problem is that some images are larger in size
                  and dimensions. And you have to resize these images to a
                  specific size. Also, you need to resize images without losing
                  image quality. On the other hand, an online image resizer is a
                  web-based platform that allows you to reduce an image to a
                  specific size. In addition, by reducing or shrinking an image
                  size, your images can be{" "}
                  <p className="mt-3">
                    more optimized. Also, optimized image files can perform
                    better. Furthermore, Compress Karu offers a variety of image
                    resizers for free. You can now access any resizing tool to
                    make your image more professional. It is a free-to-use tool.
                    You don’t have to pay for it. Also, it won’t ask you to pay
                    for any of its tools. While talking about its quality, it
                    won’t affect your image quality like color, resolutions, and
                    pixels. All of your images will remain the same as the
                    original ones. Only image size, dimensions, and some pixels
                    will be compromised. Also, our tool allows you to resize
                    images in bulk with a single tap. Simply upload more than
                    one image and resize it in bulk. Say bye-bye to the old
                    legacy apps. You don’t have to download any app on your
                    device. Simply, you have to make sure that you have a stable
                    and good speed internet speed.
                  </p>
                </p>
              </div>
              <FeaturesResize />
              <FAQSection />
            </div>
            <Buttons />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resize;
