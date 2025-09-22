import React, { useState } from 'react';
import productData from '../Products.json';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaShareAlt } from "react-icons/fa";

import bannerImage from '../assets/section-banner.jpg';

function Projects() {
    const [filterType, setFilterType] = useState('All');
    const navigate = useNavigate();

    // 🔹 Filter Logic
    const handleFilter = () => {
        if (filterType === 'All') return productData;
        return productData.filter(product => product.type === filterType);
    };

    const displayedProducts = handleFilter();

    // 🔹 Status Color Function
    const getStatusColor = (status) => {
        switch (status) {
            case 'Planned': return 'bg-red-600';
            case 'In Progress': return 'bg-yellow-500';
            case 'Ongoing': return 'bg-blue-600';
            case 'Complete': return 'bg-gray-500';
            default: return 'bg-green-600';
        }
    };

    // 🔹 Wishlist
    const addToWishlist = (product) => {
        const existing = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (!existing.some(p => p.id === product.id)) {
            const updated = [...existing, product];
            localStorage.setItem('wishlist', JSON.stringify(updated));
            window.dispatchEvent(new Event('wishlistUpdated'));
            toast.success(`${product.productname} added to your wishlist!`);
        } else {
            toast.info(`${product.productname} is already in your wishlist.`);
        }
    };

    const shareProduct = (product) => {
    const text = `Check out this product: ${product.title} at ${product.location} for ৳${product.price}`;
    const url = encodeURIComponent(window.location.href + `/flat/${product.id}`);
    if (navigator.share) {
      navigator.share({ title: product.title, text, url });
    } else {
      const whatsappLink = `https://api.whatsapp.com/send?text=${text} ${url}`;
      window.open(whatsappLink, "_blank");
    }
  };

    return (
        <>
            {/* Banner Section */}
          
                <div
                className="py-10 mt-[70px] relative bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative text-center text-white z-10">
                    <h6 className="uppercase mb-2">- M/S Monir Construction & Builders</h6>
                    <h1 className="text-4xl md:text-6xl font-bold">
                        <span className='text-[#ff823a]'>Our</span> Projects
                    </h1>
                </div>
            </div>
          

            {/* Filter Dropdown */}
            <div className='px-[8%] lg:px-[12%] py-[20px]'>
                <div className="my-4 mx-auto">
                    <div className="flex justify-between items-center flex-wrap gap-3">
                        <div className="text-gray-500 text-[1.1rem]">
                            Showing <strong>{displayedProducts.length}</strong> Project{displayedProducts.length !== 1 && 's'} for "
                            {filterType}"
                        </div>
                        <div>
                            <select
                                className='py-2 px-3 rounded text-base appearance-none min-w-[260px] bg-gray-100 border-0'
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                            >
                                {/* All */}
                                <option value="All">All</option>

                                {/* 🔹 Type Filters */}
                                <option value="Industrial">Industrial</option>
                                <option value="Residential">Residential</option>
                                <option value="Interior">Interior</option>
                                <option value="Infrastructure">Infrastructure</option>
                                <option value="Renovation">Renovation</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Recreational">Recreational</option>
                                <option value="Landscaping">Landscaping</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Educational">Educational</option>
                                <option value="Hospitality">Hospitality</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {displayedProducts.map(product => (
                        <div key={product.id} className="project-item group text-center relative border rounded shadow hover:shadow-lg overflow-hidden transition duration-300">
                            {/* Image */}
                            <div
                                className="project-image w-full h-64 overflow-hidden cursor-pointer relative"
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    navigate(`/product/${product.id}`);
                                }}
                            >
                                <img
                                    src={product.image}
                                    alt={product.productname}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* Status Badge */}
                                {product.status && (
                                    <span
                                        className={`badge text-white absolute top-2 left-2 text-xs px-2 py-1 rounded ${getStatusColor(product.status)}`}
                                    >
                                        {product.status}
                                    </span>
                                )}

                                {/* Wishlist + Call Icon */}
                                <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 transition-all duration-300 group-hover:bottom-2 opacity-0 group-hover:opacity-100">
                                    <div className='flex gap-6'>
                                        {/* Wishlist */}
                                        <div
                                                            className="project-icon cursor-pointer text-red-600 bg-white p-3 rounded-full shadow hover:bg-[#ff823a] hover:text-white transition"
                                                            title="Share Flat"
                                                            onClick={(e) => {
                                                              e.stopPropagation();
                                                              shareProduct(product);
                                                            }}
                                                          >
                                                            <FaShareAlt />
                                                            </div>
                                        <div
                                            className="project-icon cursor-pointer text-red-600 bg-white p-3 rounded-full shadow hover:bg-[#ff823a] hover:text-white transition"
                                            title='Add to Wishlist'
                                            onClick={(e) => { e.stopPropagation(); addToWishlist(product); }}
                                        >
                                            <i className='bi bi-heart'></i>
                                        </div>

                                        {/* Call Button */}
                                        <a
                                            href={`tel:${product.phone || '+88 01814-266412'}`} // 🔹 product.phone থাকলে সেটা, না থাকলে default নাম্বার
                                            className="project-icon text-red-600 bg-white p-3 rounded-full shadow hover:bg-[#ff823a] hover:text-white transition"
                                            title='Call Now'
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <i className="bi bi-telephone-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className='project-content pt-3 text-start pl-2'>
                                {product.oldprice ? (
                                    <span className='price'>
                                        <span className='font-bold text-red-600'>{product.price}</span>
                                    </span>
                                ) : (
                                    <span className='price font-semibold'>Price: {product.price}</span>
                                )}
                                <p className='font-semibold'>Type: <span className='font-normal'>{product.type}</span></p>
                                <h3 className='title pt-1 pb-2 font-semibold text-xl text-[#ff823a]'>
                                    Title: <span>{product.productname}</span>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Toast Notifications */}
            <ToastContainer
                position='top-right'
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default Projects;
