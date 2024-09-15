import {
  FaCheckCircle,
  FaLock,
  FaGlobe,
  FaUserFriendly,
  FaBolt,
  FaFileImage,
  FaMobileAlt,
  FaRuler,
  FaLayerGroup,
  FaGlobeAmericas,
  FaDownload,
  FaMedal,
} from "react-icons/fa";

function FeaturesResize() {
  const features = [
    {
      title: "Resize Image To 1024×576 Pixels Online Without Losing Quality",
      description:
        "Without a doubt, visual representations like images, GIFs, and videos are an essential part of our daily life. Almost daily, we see many photos in each area of the field.  Also, images are important in grabbing someone’s attention. Some photos are used to convey a message, too. Whether you are a blogger, website owner, e-commerce",
    },
    {
      title: "Resize Photo To 10×15 Online – Free Image Resizer",
      description:
        "Select Or Drag & Drop Images Here Select Images Width: px Height: px Resize Download Photography is an essential part of our lives in the digital devices era. To save memorable moments of our joyful life, we capture images through Mobile phones, digital cameras, and other digital gadgets. In addition, sometimes, we use these images",
    },
    {
      title: "2340×1080 Image Converter (Pixels) – Online Image Converter",
      description:
        "A 2340×1080 pixels image resolution is used for backgrounds, thumbnails, covers, and banners. Also, these resolutions are being used for web posts, social platforms (Facebook, Twitter, Instagram, etc) images, and printing purposes. Whether you have large or small image dimensions, you can still enlarge (upscale) or reduce the image to 2340 x 1080 (width x",
    },
    {
      title: "100×100 Image Converter Online – Easily Resize Images",
      description:
        "A 100×100 pixels image resolution is used for a logo, avatar, vector, art, icons, favicons, etc. It has a square image orientation. In addition, many online platforms, websites, and products use these images in a PNG format. Whether you have larger or smaller image dimensions, you can still upscale or reduce image resolution using CompressKaru’s ",
    },
    {
      title: "112×112 Image Converter Online – Convert Photos Free",
      description:
        "A 112×112 pixels image resolution is used for icons, emotes, logos, and avatars. Also, these dimensions can be used for online platforms such as Discord, Twitch, WhatsApp, etc. CompressKaru’s 112×112 image converter lets you resize/rescale a larger image to exactly 112 x 112 px online without installing any software on your device. This guide will.",
    },
    {
      title: "Fast Compression",
      description:
        "As free online image compressor is developed with updated and enhanced algorithms, it has a very fast compression. It won’t take much time to resize your images. Now, you do not have to wait for a long. It compress large sized images within few seconds in.",
    },
    {
      title: "Multiple File Formats",
      description:
        "Compress Karu online compression tool supports multiple image file formats. It allows its users to upload images in various formats like jpg, .jpeg., and .png without any restrictions.",
    },
    {
      title: "No Device Requirements",
      description:
        "It doesn’t nee any particular device to use this tool. It is compatible for all kind  of devices. If you have iPhone or android device, you can also use online photo compressor. Moreover, if you are using a tablet pc, laptop or desktop computer, the you can also use this tool for free.",
    },
    {
      title: "Image Dimension Changer",
      description:
        "Without a doubt, it has a online dimension changer tool. If you are facing dimension issue with your image, don’t worry! Our online tool will help you regarding to this. While you upload the image, it will ask you to set its dimensions (if needed). Washout a doubt, it will work without losing quality and pixels.",
    },
    {
      title: "Bulk Image Compressor",
      description:
        "If you have more images, then It allows its user to compress multiple images within same quality at same time. You don’t have to upload and compress images one by one. Our Advanced photo size compressor save a lot of time and effort as well.",
    },
    {
      title: "Access From Anywhere",
      description:
        "There is no boundary limit to use image compressor. It is designed for all people across the border. Also, it has no language barrier. Anyone can use online photo size compressor from anywhere, anytime over the world.",
    },
    {
      title: "No External Software Installation",
      description:
        "Now a days, most of the people do not get comfortable while installing an application on their device like PC, Laptop, Mobile phone, etc. Sometimes, they are running low storage on their devices. Therefore, we have introduced a web-based online image compressor tool. You don’t have to install any application to reduce jpeg image from now. You just need an internet connection to use best image compressor. Also, it is useful for everyone.",
    },
    {
      title: "Best Quality Online Image Compressor",
      description:
        "The quality of compressed images is a big challenge now a days. Most of the tools can not fulfill the quality. However, they failed to provide the best quality to the user. Our free photo compressor is developed in such a manner that it will not affect the quality of the image. Also, it will compress JPEG images in best quality.",
    },
  ];

  return (
    <div>
      <article className="bg-gradient-to-br rounded-md mt-5 from-[#0C2F55] via-[#1E5080] to-[#3A72A5] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {features.map((feature, index) => (
              <section key={index} className="bg-white rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl text-[#F79422] mr-4">
                    {feature.icon}
                  </div>
                  <h2 className="text-2xl font-semibold">{feature.title}</h2>
                </div>
                <p className="text-black">
                  {feature.description}...{" "}
                  <a
                    className="text-blue-400 font-semibold"
                    href="/resizeReadmore"
                  >
                    Read More
                  </a>{" "}
                </p>
              </section>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default FeaturesResize;
