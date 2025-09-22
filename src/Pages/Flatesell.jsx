import React, { useState } from "react";
import flatsData from "../FlatesData.json";
import { useNavigate } from "react-router-dom";
import { BiBed, BiBath, BiArea, BiPhoneCall } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bannerImage from "../assets/section-banner.jpg";

function Flatesell() {
  const [filterType, setFilterType] = useState("All");
  const navigate = useNavigate();

  // Filter Logic
  const handleFilter = () => {
    if (filterType === "All") return flatsData.flats;
    return flatsData.flats.filter((flat) => flat.type === filterType);
  };
  const displayedFlats = handleFilter();

  // Helper: per sq.ft price
  const getPricePerSqft = (price, size) => {
    const p = parseInt(price);
    const s = parseInt(size.replace(/\D/g, "")); // remove 'sqft'
    return s ? Math.round(p / s) : 0;
  };

  // Direct share
  const shareFlat = (flat) => {
    const text = `Check out this flat: ${flat.title} at ${flat.location} for ৳${flat.price}`;
    const url = encodeURIComponent(window.location.href + `/flat/${flat.id}`);
    if (navigator.share) {
      navigator.share({ title: flat.title, text, url });
    } else {
      const whatsappLink = `https://api.whatsapp.com/send?text=${text} ${url}`;
      window.open(whatsappLink, "_blank");
    }
  };

  // Direct call
  const callFlat = (flat) => {
    const phone = flat.contact || "01814266412";
    window.location.href = `tel:${phone}`;
  };

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
            <span className="text-[#ff823a]">Building Materials Support and Services </span>
          </h1>
        </div>
      </div>

      {/* Filter Dropdown */}
      <div className="px-[8%] lg:px-[12%] py-[20px]">
        <div className="my-4 mx-auto flex justify-between items-center flex-wrap gap-3">
          <div className="text-gray-500 text-[1.1rem]">
            Showing <strong>{displayedFlats.length}</strong> Flat
            {displayedFlats.length !== 1 && "s"} for "{filterType}"
          </div>
          <select
            className="py-2 px-3 rounded text-base appearance-none min-w-[260px] bg-gray-100 border-0"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>

        {/* Flats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedFlats.map((flat) => (
            <div
              key={flat.id}
              className="group border rounded-xl shadow hover:shadow-xl overflow-hidden bg-white transition duration-300"
            >
              {/* Image */}
              <div
                className="relative h-56 w-full overflow-hidden cursor-pointer"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/flatDetails/${flat.id}`);
                }}
              >
                <img
                  src={flat.images}
                  alt={flat.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />



                {/* Share + Call */}
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    className="bg-white p-2 rounded-full shadow hover:bg-[#ff823a] hover:text-white transition"
                    title="Share Flat"
                    onClick={(e) => {
                      e.stopPropagation();
                      shareFlat(flat);
                    }}
                  >
                    <FaShareAlt />
                  </button>
                  <button
                    className="bg-white p-2 rounded-full shadow hover:bg-[#ff823a] hover:text-white transition"
                    title="Call Now"
                    onClick={(e) => {
                      e.stopPropagation();
                      callFlat(flat);
                    }}
                  >
                    <BiPhoneCall />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between h-56">
                <div>
                  <h2 className="text-lg font-bold hover:text-[#ff823a] text-gray-900">{flat.title}</h2>
                  <p className="text-sm text-gray-500">{flat.location}</p>
                  <p className="text-xl font-semibold text-[#ff823a] mt-2">
                    ৳ {(parseInt(flat.price) / 100000).toFixed(2)}{" "}
                    <span className="text-base font-normal text-gray-600">Lacs</span>
                  </p>

                  {/* Features */}
                  <div className="flex items-center gap-4 text-gray-600 text-sm mt-3">
                    <span className="flex items-center gap-1">
                      <BiBed className="text-lg font-bold text-black" /> {flat.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <BiBath className="text-lg font-bold text-black" /> {flat.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <BiArea className="text-lg font-bold text-black" /> {flat.size}
                    </span>

                  </div>

                  {/* Status & Type */}
                  <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
                    <span>{flat.status}</span> • <span>{flat.type}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-3 text-gray-500 text-xs">
                  <span>Publish</span>
                  <span>{flat.updatedAt}..</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default Flatesell;
