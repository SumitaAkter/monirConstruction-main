import React from "react";
import { useNavigate } from "react-router-dom";
import consultancyImage1 from "../assets/building materials.jpg";
import consultancyImage2 from "../assets/building-materials1.jpg";
import consultancyImage3 from "../assets/building-materials2.jpg";
import bannerImage from "../assets/section-banner.jpg";

const Service = () => {
  const navigate = useNavigate();

  // Helper function to navigate and scroll to top
  const navigateTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Banner Section */}
      <div>
        <div
          className="py-10 mt-[70px] relative bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 text-center text-white px-5">
            <h6 className="uppercase mb-2 text-sm md:text-lg">
              - M/S Monir Construction & Builders
            </h6>
            <h1 className="text-3xl md:text-5xl font-bold">
              <span className="text-[#ff823a]">Our </span>Service
            </h1>
          </div>
        </div>

        {/* First Section */}
        <div className="px-[8%] lg:px-[12%] py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="h-full flex flex-col justify-center">
              <div className="w-12 h-[2px] bg-[#ff823a] mb-4"></div>
              <h2 className="capitalize text-2xl font-bold text-gray-800 mb-4">
                Building Consultancy
              </h2>
              <p className="text-gray-600 mb-8">
                We specialize in delivering both residential and non-residential construction projects with precision and quality. Our expertise also extends to electro-mechanical works, as well as interior design, decoration, and complete renovation services.
              </p>
              <br />
              <button
                onClick={() => navigateTo("/extrainfo1")}
                className="bg-[#ff823a] text-white font-medium px-4 w-28 py-2 text-sm rounded-md hover:bg-black transition"
              >
                READ MORE
              </button>
            </div>

            {/* Right Image */}
            <div>
              <img
                src={consultancyImage2}
                alt="Building Consultancy"
                className="w-full h-auto lg:h-[400px] object-cover rounded-lg shadow-md transform transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="px-[8%] py-16 bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Image */}
            <div>
              <img
                src={consultancyImage3}
                alt="Building Consultancy"
                className="w-full h-auto lg:h-[400px] object-cover rounded-lg shadow-md transform transition duration-500 hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div className="h-full flex flex-col justify-center">
              <div className="w-12 h-[2px] bg-[#ff823a] mb-4"></div>
              <h2 className="capitalize text-2xl font-bold text-gray-800 mb-4">
                Building Construction
              </h2>
              <p className="text-gray-600 mb-8">
                Our expertise covers innovative building design, elegant interior solutions, and professional financial guidance to ensure every project is efficient and successful.
              </p>
              <br />
              <button
                onClick={() => navigateTo("/extrainfo2")}
                className="bg-[#ff823a] text-white font-medium px-4 py-2 w-28 text-sm rounded-md hover:bg-black transition"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="px-[8%] py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="h-full flex flex-col justify-center">
              <div className="w-12 h-[2px] bg-[#ff823a] mb-4"></div>
              <h2 className="capitalize text-2xl font-bold text-gray-800 mb-4">
                Building Materials Support and Services
              </h2>
              <p className="text-gray-600 mb-8">
                We offer a wide range of well-organized construction and building materials, ensuring customers can find the right product at the right time with ease. Alongside sales, we also provide reliable repair and installation services for all building material–related products.
              </p>
              <br />
              <button
                onClick={() => navigateTo("/extrainfo3")}
                className="bg-[#ff823a] text-white font-medium px-4 py-2 w-28 text-sm rounded-md hover:bg-black transition"
              >
                READ MORE
              </button>
            </div>

            {/* Right Image */}
            <div>
              <img
                src={consultancyImage1}
                alt="Building Consultancy"
                className="w-full h-auto lg:h-[400px] object-cover rounded-lg shadow-md transform transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
