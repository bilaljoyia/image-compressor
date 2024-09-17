import { Link } from "react-router-dom";
function FeaturesJPEG() {
  const features = [
    {
      title: "350×467 Image Converter Online – Free Image Converter",
      description:
        "A 350×467 pixels image size is used for various purposes, including passport, CNIC, POC, NICOP, etc. Many countries like Pakistan use these resolutions for ID card photos. On the other hand, users who are applying for the cards mentioned above online can convert or resize their existing photos to these dimensions. CompressKaru lets you resize",
    },
    {
      title: "96×96 Image Converter Online – 100% Free Photo Resizer",
      description:
        "Usually, a 96×96 image size is used for logos, icons, and PDFs. This size image has a PNG file format. Also, a 96×96 pixels image also has JPG, SVG, and WebP file formats. Whether you are a blogger, website developer, social media manager, e-commerce store, graphic designer, or freelancer, you may need this photo size.",
    },
    {
      title: "640×640 Image Converter – Resize Your Images Online",
      description:
        "Mostly, A 640×640 pixels image size is used for an e-commerce store to showcase their products. Also, 640*640 image size is used for social media posts, printing brochures, pamphlets, social media posts, and so on. These images are used on online platforms like Facebook, WhatsApp, Instagram, Twitch, Spotify, etc. Moreover, these online platforms allow you.",
    },
    {
      title: "Compress JPEG To 240KB – Online JPEG Image Compressor",
      description:
        "Compress JPEG To 240KB is an online image resizer that resize any sort of image to 240KB. It will let its users or visitors to reduce image size without losing quality. Moreover, it has multiple other free image tools. Also, a visitor can use it for free of cost. There are no hidden charges to  ",
    },
    {
      title: "Resize Image For Facebook Ads – Free Image Converter",
      description:
        "Facebook ad is an important point while doing digital marketing. Ads are used to grab user attention, showcase products, brand awareness, and so on. On the other hand, while running an ad campaign, you must use properly resized images. If you don’t know how to resize image for Facebook ads online, read the full guide",
    },
    {
      title: "3000×2400 Image Converter Online – Free Image Resizer",
      description:
        "Mostly, A 3000×2400 pixels image resolution is used for printing purposes. Besides this, it is also used for large-size images such as Facebook cover, YouTube cover, header image, website cover image, iconography, and so on. Moreover, it is compulsory to use optimized images. Because optimized images can be loaded faster on a web page. There",
    },
    {
      title: "Compress JPEG To 4KB – Reduce Image Size Online",
      description:
        "To reduce JPEG file size, Compress Karu has introduced an online image reducer. It will resize image to 4KB exactly. Also, Compress JPEG To 4KB image reducer has a variety of features in it.  There is no charges to use any of its photo reducer online tools including it. Moreover, it has a fast compression",
    },
    {
      title: "Compress JPEG To 300KB – Compress Image Online Free",
      description:
        "Although, Compress JPEG To 300KB with our best online image compressor tool is more reliable. Compress Karu allows its users to compress jpeg image online without any cost. Also, We do provide free online JPG converter. Here on our online compress picture to 300KB free tool, you can resize any size of image and reduce",
    },
    {
      title: "Compress JPEG To 30KB – Reduce Without Losing Quality",
      description:
        "Our online Compress JPEG To 30KB tool is a web based application which is available for the people of the all over the world. Although, it a free tool. With the help of this tool, you can compress jpeg size to 30kb within few seconds. Quickly, it will resize or reduce JPG images to the",
    },
    {
      title: "Compress JPEG To 1MB – Easily Compress Image Online",
      description:
        "If you are looking for a best image compressor free online tool, then you have landed on a right place. Compress Karu is providing a variety of free online image resizers. Moreover, one of the most demanding online image optimizer or online JPEG optimizer tool is Compress JPEG To 1MB. In this article, we will",
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
                <Link to="/gpeg-compressor">
                  <p className="text-black">
                    {feature.description}...{" "}
                    <a
                      className="text-blue-400 font-semibold"
                      href="/resizeReadmore"
                    >
                      Read More
                    </a>{" "}
                  </p>
                </Link>
              </section>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default FeaturesJPEG;
