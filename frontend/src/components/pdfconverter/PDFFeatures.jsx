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
      title: "Free Online PDF Converter",
      description:
        "Although, a PDF converter is an online web application that allows its users to convert any file such as JPG, JPEG, PNG, GIFF, etc. for free even without downloading an external application. In addition, users can convert any files to PDF. Also, they can convert heic to PDF file to any format (PNG, JPG, JPEG, Word, etc.). It is a free-to-use application. No one has to pay even a single penny.",
    },
    {
      title: "Features & Benefits Of An Online PDF Converter",
      description:
        "There are many online and offline PDF converters available on the internet. Some of the converters are paid and the rest of the tools only allow a few limited files to convert. On the other hand, Compress Karu lets you convert your files for free. There is no need to pay for any conversion. Also, you don’t have to buy or subscribe to any membership. Enjoy unlimited conversions without any limitations.",
    },
    {
      title: "Convert PDF Without Losing Quality",
      description:
        "Without a  doubt, Compress Karu’s PDF converter will not affect the quality of the data while converting it to any file format. In addition, your data like images, texts, or other graphics quality will remain the same as the original.",
    },
    {
      title: "Bulk Online PDF Converter",
      description:
        "Compress Karu lets you convert files to PDF or form PDF to any file type in bulk. It has batch-converting features in it. Moreover, choose and convert PDFs at the same time with a single click without wasting your time.",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Although, it has a user-friendly interface. All the tools, menus, and features of the PDF converter are well-organized. You can easily look for any tool, feature, or option very easily. Besides this, you can also convert files without having any experience-level knowledge.",
    },
    {
      title: "Safe & Secure",
      description:
        "When it comes to the user’s data protection, Compress Karu’s free PDF converter is very safe to use. Furthermore, your data and files are safe to use. We do not share or sell your personal or organizational files with any third-party applications. Also, your data will be deleted from our tool and server just after a few minutes of converting.",
    },
    {
      title: "Why And Who Can Convert PDF Files Online?",
      description:
        "Students, instructors, and trainers can use online tools to convert their assignments, slides, research papers, notes, thesis, or presentations to PDF format with one click. By converting their data to PDF, they can easily share or distribute it even having a slow speed internet.",
    },
    {
      title: "Professionals Businesses",
      description:
        "Professionals like business owners, freelancers, job holders, job seekers, etc can access this tool to convert their files to PDF. Convert free files such as projects, reports, or presentations to PDF. Although, CompresKaru’s PDF converter will perform these tasks very efficiently.",
    },
    {
      title: "Archiving Documentation",
      description:
        "Our PDF converting tools can help out in archiving and documentation. You can convert digital or physical products into PDFs.",
    },
    {
      title:
        "How To Convert A File To PDF Or PDF To Any Format Without Losing Quality?",
      description:
        "Click on the “Select Files” button. 2 : Also, you can drag and drop the file(s) to the converter. 3 : Now choose the file(s) you want to convert to PDF and click on the “Open” button. 4 : After opening the file, tap on the “Convert” button. 5 : Wait for the processing. 6 : After a few seconds of processing, click on the “Download” button to save the PDF file.",
    },
  ];

  return (
    <div>
      <article className="bg-gradient-to-br rounded-md mt-5 from-[#0C2F55] via-[#1E5080] to-[#3A72A5] py-16 text-white">
        <div className="container mx-auto px-4">
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
