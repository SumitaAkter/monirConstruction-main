import React from "react";
import flatsData from "../FlatesData.json";
import { useParams } from "react-router-dom";
import bannerImage from "../assets/section-banner.jpg";
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


import {
  Bed, Bath, Ruler, Car, Building2, Eye, Droplet, Zap, Snowflake, LayoutDashboard,
  Columns, MapPin, Home, Compass,
  Share2,
  CheckCircle,
  Wind, Fan, Power
} from "lucide-react";

// utilities mapping with icons
const utilityIcons = {
  Electricity: <Zap size={18} />,
  WASA: <Droplet size={18} />,
  Generator: <Power size={18} />,
  AC: <Wind size={18} />,
};

const FlateDetails = () => {

  const { id } = useParams();
  const flat = flatsData.flats.find((item) => item.id === parseInt(id));

  if (!flat) {
    return <p className="text-center text-red-500 mt-10">Flat not found!</p>;
  }

  return (
    <>
      {/* Banner Section */}
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
            <span className="text-[#ff823a]">Flat </span>Details
          </h1>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-10 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Section */}
          <div className="lg:col-span-2 space-y-5">

            {/* Image */}
            <img
              src={flat.images[0].replace("./images/", "/images/")}
              alt={flat.title}
              className="w-full h-96 object-cover rounded-xl"
            />

            {/* Title & Location */}
            <div className="flex justify-between items-center mt-3">
              <div>
                <h1 className="text-2xl font-semibold">{flat.title}</h1>
                <p className="text-gray-800 mt-1">{flat.location}</p>
              </div>
              <button
  className="flex items-center gap-1 text-gray-600 hover:text-orange-600"
  onClick={() => {
    if (navigator.share) {
      navigator.share({ title: document.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert("Link copied to clipboard!"))
        .catch(() => alert("Failed to copy link."));
    }
  }}
>
  <Share2 size={18} /> Share
</button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-green-300 text-black text-sm px-3 py-1 rounded-full">
                {flat.status}
              </span>
              <span className="bg-blue-300 text-black text-sm px-3 py-1 rounded-full">
                {flat.type}
              </span>
              <span className="bg-purple-300 text-black text-sm px-3 py-1 rounded-full">
                {flat.flatType}
              </span>
            </div>

            {/* Price & Ready */}
            <h2 className="text-2xl text-[#ff823a] font-bold mt-3">
              ৳ {Number(flat.price).toLocaleString()}
            </h2>
            <p className="text-gray-700 text-sm">Est. Repayment ৳ 1.38 Lac /mo</p>
            <span className="text-black text-sm font-bold py-1 rounded-full flex items-center gap-1">
              <CheckCircle size={14} /> {flat.status}
            </span>
            <hr />

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6 text-gray-700">
              <div className="flex items-center gap-2"><Bed size={18} /> {flat.beds} Bed</div>
              <div className="flex items-center gap-2"><Bath size={18} /> {flat.baths} Bath</div>
              <div className="flex items-center gap-2"><Ruler size={18} /> {flat.size}</div>
              <div className="flex items-center gap-2"><Building2 size={18} /> {flat.floor}</div>
              <div className="flex items-center gap-2"><Eye size={18} /> {flat.view}</div>
              <div className="flex items-center gap-2"><Car size={18} /> {flat.parking} Parking</div>
              <div className="flex items-center gap-2"><Columns size={18} /> {flat.balcony} Balcony</div>
              <div className="flex items-center gap-2"><MapPin size={18} /> {flat.roadSize}</div>
              <div className="flex items-center gap-2"><Home size={18} /> {flat.furnishing}</div>
              <div className="flex items-center gap-2"><Compass size={18} /> {flat.facing}</div>

              <div className="flex items-center gap-2"><Snowflake size={18} /> {flat.utilities.includes("Private AC") ? "Private AC" : "—"}</div>
              <div className="flex items-center gap-2"><LayoutDashboard size={18} /> {flat.lift} Lift(s)</div>
              <div className="flex justify-between gap-[90px] text-gray-700">
                {flat.utilities.map((item, index) => (
                  <div key={index} className="flex gap-5  text-gray-700">
                    {utilityIcons[item] || <Zap size={18} />} {/* default icon if missing */}
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <hr />
            {/* Property Details Table */}
            <div className="mt-16">
              <h3 className="text-xl font-semibold mb-4">Property More Details:</h3>
              <table className="w-full border border-gray-300">
                <tbody>
                  {flat.propertyInfo &&
                    Object.entries(flat.propertyInfo).map(([key, value]) => (
                      <tr key={key} className="border-b border-gray-200">
                        <td className="bg-[#f6a374] px-4 py-2 font-semibold">{key}</td>
                        <td className="px-4 py-2">{value}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">About this property:</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{flat.description}</p>
              <br />
              <p className="text-lg text-gray-700 leading-relaxed">Location: {flat.location}</p>
              <p className="text-lg text-gray-700 leading-relaxed">size: {flat.size}</p>
              <p className="text-lg text-gray-700 leading-relaxed">Bedroome: {flat.beds}</p>
              <p className="text-lg text-gray-700 leading-relaxed">Facing: {flat.facing}</p>
              <p className="text-lg text-gray-700 leading-relaxed">Floor: {flat.floor}</p>

              <h3 className="text-xl font-semibold text-justify mt-8">Apartment Features:</h3>

              <p className="text-gray-700 mt-4 text-lg text-justify leading-relaxed">
                This apartment is a <span className="font-semibold">{flat.type}</span>,
                categorized as a <span className="font-semibold">{flat.flatType}</span>.
                It comes with <span className="font-semibold">{flat.furnishing}</span> furnishing,
                offering comfort and convenience for modern living.
                Currently, the property status is <span className="font-semibold">{flat.status}</span>,
                making it an ideal choice for individuals or families who are looking for a well-suited home.
              </p>
              <h3 className="text-xl font-semibold text-justify mt-8">Building Facilities:</h3>

              <p className="text-gray-700 mt-4 text-lg text-justify leading-relaxed">
                Located at <span className="font-semibold">{flat.location}</span> with a road size of
                <span className="font-semibold"> {flat.roadSize}</span>, this apartment provides
                <span className="font-semibold"> {flat.lift} lift(s)</span> to ensure convenient and effortless
                accessibility to all floors. The property is equipped with a fully functional and professionally
                managed resident security system, including 24/7 CCTV surveillance, secure entry and exit points,
                and trained security personnel, offering peace of mind to all residents. These features, combined
                with its modern design and prime location, make this apartment a safe, comfortable, and ideal
                choice for families or individuals seeking a high-quality urban living experience.
              </p>
              <br />
              <span className="font-semibold">Price: {flat.price}</span>
              <br />
              <br />
              <p className="text-gray-700 mt-4 text-lg text-justify leading-relaxed">A brand-new, ready-to-move-in luxury apartment with prime connectivity, open views, and world-class finishes.</p>

              <h3 className="text-xl font-semibold text-justify mt-8">Amenities:</h3>
              <p className="text-gray-700 mt-4 text-lg text-justify leading-relaxed">This building offers modern and comfortable amenities for all residents. Enjoy a refreshing swim in the swimming pool, 💪 stay fit in the fully equipped gymnasium, and let your kids have fun in the safe and spacious playground. 🍳 Cook easily with the provided cooker hood in your kitchen, 🎾 play tennis in the dedicated court, and gather friends and family in the community hall. With pets allowed and wheelchair accessibility ♿, this building ensures convenience, fun, and inclusivity for everyone.</p>
              <h3 className="text-xl font-semibold text-justify mt-8">Safety & Security:</h3>
              <p className="text-gray-700 mt-4 text-lg text-justify leading-relaxed">Safety and security are top priorities in this building. 📹 24/7 CCTV surveillance keeps all areas monitored,clearly marked emergency exits provide safe evacuation, and 🔥 fire alarms and fire doors ensure protection in case of emergencies.Fire hydrants are strategically placed for quick response, and lightning protection adds an extra layer of safety. With professional security personnel on duty, residents can enjoy peace of mind and live comfortably in a safe environment.</p>
              <h3 className="text-xl font-semibold text-justify mt-8">Property Map View:</h3>
              <section className="map-location mt-4">
                <iframe
                  title="Our Location"
                  className="map rounded w-full h-96"
                  src={flat.mapLocation} // JSON থেকে dynamic link
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </section>


            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white shadow-md rounded-xl p-5 h-fit sticky top-20 space-y-4">

            {/* Owner */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold">
                  M
                </div>
                <div>
                  <h4 className="font-semibold">{flatsData.company.companyname || "Company Name"}</h4>
                  <p className="text-sm text-gray-500">{flatsData.company.name}</p>
                </div>
              </div>
              <Share2 size={18} className="text-gray-600 hover:text-orange-600 cursor-pointer" onClick={() => navigator.share ? navigator.share({ title: 'Flat Details', text: 'Check out this flat!', url: window.location.href }) : alert('Sharing not supported')} />

            </div>

            {/* View Phone */}
            <button
              onClick={() => window.location.href = "tel:01814266412"}
              className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100"
            >
              View Phone Number
            </button>

            <p className="text-xs text-gray-500 mt-3">
              I confirm that I've read the Privacy Policy and allow my information
              to be shared with this agent who may contact me later.
            </p>
          </div>

        </div>
      </div>

      {/** Recomended Flats */}
      <div className="products-container px-[8%] lg:px-[12%] py-[20px] my-1">
  <div className="relative">
    <div className="row">
      <div className="section-title mb-12 product-title text-start">
        <h2 className='font-semibold text-3xl'>Recommended Flats</h2>
        <p className="text-gray-500">Also get better flat in Our service</p>
      </div>
    </div>

    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      modules={[Navigation, Autoplay]}
      navigation={{ nextEl: ".flats-swiper-next", prevEl: ".flats-swiper-prev" }}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        1399: { slidesPerView: 4 },
        1199: { slidesPerView: 3 },
        991: { slidesPerView: 2 },
        767: { slidesPerView: 1.5 },
        0: { slidesPerView: 1 },
      }}
      className='mt-4 swiper relative'
    >
      {flatsData.flats.filter(flat => flat.id >= 1 && flat.id <= 26).map(flat => (
        <SwiperSlide key={flat.id}>
          <div
            className="product-item text-center relative cursor-pointer"
            onClick={() => {
              navigate(`/flatDetails/${flat.id}`);
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 50); // navigation এর পরে scroll হবে
            }}
          >
            <div className="product-image w-full relative overflow-hidden rounded-lg">
              <img
                src={flat.images[0].replace("./images/", "/images/")}
                alt={flat.title}
                className="w-full h-[250px] sm:h-[280px] md:h-[300px] lg:h-[320px] xl:h-[350px] object-cover transition-transform duration-300 hover:scale-105"
              />

              {flat.status && (
                <span className={`badge text-white absolute top-2 left-2 text-xs px-2 py-1 rounded ${flat.status === 'Available' ? 'bg-green-600' : 'bg-red-600'}`}>
                  {flat.status}
                </span>
              )}
            </div>

            <div className="product-content pt-2">
              <span className='price no-underline'>
                {flat.price}
              </span>
              <h3 className='title'>
                {flat.title}
              </h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Navigation buttons */}
    <div className="flats-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer z-10 text-gray-500 hover:text-orange-600 text-3xl font-bold">
      &#10094;
    </div>
    <div className="flats-swiper-next absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer z-10 text-gray-500 hover:text-orange-600 text-3xl font-bold">
      &#10095;
    </div>
  </div>
</div>

    </>
  );
};

export default FlateDetails;
