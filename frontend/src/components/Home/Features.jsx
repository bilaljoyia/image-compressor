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

function Features() {
  const features = [
    {
      icon: <FaCheckCircle className="text-[#0C2F55]" />,
      title: "Desired Image File Size Reduction",
      description:
        "Reduce your image to specific sizes like 500Kb, 200Kb, 100Kb, 50Kb, 30Kb, 20KB, etc. No file size limitations.",
    },
    {
      icon: <FaLock className="text-[#0C2F55]" />,
      title: "Image File Safety",
      description:
        "Compresskaru make sure that your uploaded file are safe. As your images are confidential and private. So, we do not use any kind of images. Also, the compression process is established with a secure server connection and encrypted data transmission. Even your files won’t distributed to any third party sources. Either the compressed file or uploaded images are checked manually. You can use our online image compressor without any kind of jitter.",
    },
    {
      icon: <FaGlobe className="text-[#0C2F55]" />,
      title: "Compress Image Online",
      description:
        "Say goodbye to any external application to shrink image size. Now, you have not to allow or install any app on your device. There is an online tool for you to compress photos online. Also, you data is safe and secure with our online tool. You only have to upload your image or a group of image for compression. In addition, you can directly download or share your compressed data with a single tab.",
    },
    {
      title: "User-Friendly Interface",
      description:
        "It has a user-friendly design which is very easy to use. No expert level knowledge is required to use this tool. Any person of any age group can use online photo compressor.  Online image compressor saves you from complexity and a lot of user’s time during compression. We are trying our best to provide a best experience to our valued visitors.",
    },
    {
      icon: <FaDownload className="text-[#0C2F55]" />,
      title: "Free To Use JPEG Compressor",
      description:
        "There is no cost to use this tool. We’re only here to provide the best possible solution to our visitors. The online photo compressor don’t force and ask its users to make any purchase. Also, it don’t ask visitors for any kind of subscription. In short, you do not have pay a single penny. As a result, you can use its best services like high quality image compression, instant undamaged reduce size pictures for free of cost.",
    },
    {
      icon: <FaBolt className="text-[#0C2F55]" />,
      title: "Fast Compression",
      description:
        "As free online image compressor is developed with updated and enhanced algorithms, it has a very fast compression. It won’t take much time to resize your images. Now, you do not have to wait for a long. It compress large sized images within few seconds in.",
    },
    {
      icon: <FaFileImage className="text-[#0C2F55]" />,
      title: "Multiple File Formats",
      description:
        "Compress Karu online compression tool supports multiple image file formats. It allows its users to upload images in various formats like jpg, .jpeg., and .png without any restrictions.",
    },
    {
      icon: <FaMobileAlt className="text-[#0C2F55]" />,
      title: "No Device Requirements",
      description:
        "It doesn’t nee any particular device to use this tool. It is compatible for all kind  of devices. If you have iPhone or android device, you can also use online photo compressor. Moreover, if you are using a tablet pc, laptop or desktop computer, the you can also use this tool for free.",
    },
    {
      icon: <FaRuler className="text-[#0C2F55]" />,
      title: "Image Dimension Changer",
      description:
        "Without a doubt, it has a online dimension changer tool. If you are facing dimension issue with your image, don’t worry! Our online tool will help you regarding to this. While you upload the image, it will ask you to set its dimensions (if needed). Washout a doubt, it will work without losing quality and pixels.",
    },
    {
      icon: <FaLayerGroup className="text-[#0C2F55]" />,
      title: "Bulk Image Compressor",
      description:
        "If you have more images, then It allows its user to compress multiple images within same quality at same time. You don’t have to upload and compress images one by one. Our Advanced photo size compressor save a lot of time and effort as well.",
    },
    {
      icon: <FaGlobeAmericas className="text-[#0C2F55]" />,
      title: "Access From Anywhere",
      description:
        "There is no boundary limit to use image compressor. It is designed for all people across the border. Also, it has no language barrier. Anyone can use online photo size compressor from anywhere, anytime over the world.",
    },
    {
      icon: <FaDownload className="text-[#0C2F55]" />,
      title: "No External Software Installation",
      description:
        "Now a days, most of the people do not get comfortable while installing an application on their device like PC, Laptop, Mobile phone, etc. Sometimes, they are running low storage on their devices. Therefore, we have introduced a web-based online image compressor tool. You don’t have to install any application to reduce jpeg image from now. You just need an internet connection to use best image compressor. Also, it is useful for everyone.",
    },
    {
      icon: <FaMedal className="text-[#0C2F55]" />,
      title: "Best Quality Online Image Compressor",
      description:
        "The quality of compressed images is a big challenge now a days. Most of the tools can not fulfill the quality. However, they failed to provide the best quality to the user. Our free photo compressor is developed in such a manner that it will not affect the quality of the image. Also, it will compress JPEG images in best quality.",
    },
  ];

  return (
    <div>
      <div className="flex mt-20 rounded mb-10 bg-[#0C2F55] text-white font-semibold justify-between items-center">
        <div className="text-center">
          <h1 className="text-[#F79422] font-bold text-2xl">Fast</h1>
          <p className="p-5">The processing power of our tools is excellent.</p>
        </div>
        <div className="text-center">
          <h1 className="text-[#F79422] font-bold text-2xl">100% Secure</h1>
          <p className="p-5">
            {" "}
            The Server does not store any files. Our system is safe.
          </p>
        </div>
        <div className="text-center p-9">
          <h1 className="text-[#F79422] font-bold text-2xl">User Friendly</h1>
          <p className="p-5">
            Everyone can use these tools easily with just 1 click,
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-4">
        <div className="text-center">
          <img
            className="w-64 h-64 md:w-96 md:h-96 rounded-full mx-auto"
            src="https://compresskaru.com/wp-content/uploads/2022/10/tom.jpg"
            alt=""
          />
          <p className="mt-4">Original Transparent Photo File Size 50KB</p>
        </div>

        <div className="text-2xl font-bold my-4 md:my-0">vs</div>

        <div className="text-center">
          <img
            className="w-64 h-64 md:w-96 md:h-96 rounded-full mx-auto"
            src="https://compresskaru.com/wp-content/uploads/2022/10/tom.jpg"
            alt=""
          />
          <p className="mt-4">Compressed Transparent Photo File Size 15KB</p>
        </div>
      </div>

      <article className="bg-gradient-to-br rounded-md mt-5 from-[#0C2F55] via-[#1E5080] to-[#3A72A5] py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-[#F79422] mb-12">
            Features of Our Online Image Compressor
          </h1>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <section
                key={index}
                className="bg-white bg-opacity-10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl text-[#F79422] mr-4">
                    {feature.icon}
                  </div>
                  <h2 className="text-2xl font-semibold">{feature.title}</h2>
                </div>
                <p className="text-gray-200">{feature.description}</p>
              </section>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default Features;
