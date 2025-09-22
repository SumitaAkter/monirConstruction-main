import React from 'react';
import blogs from '../Blogs.json';
import { FaHeart, FaComment } from 'react-icons/fa';
import bannerImage from '../assets/section-banner.jpg';

const Blog = () => {
    return (
        <>
            {/* Banner Section */}
            <div
                className="py-10 mt-[70px] relative bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative text-center text-white z-10">
                    <h6 className="uppercase mb-2">- M/S Monir Constructions & Builders</h6>
                    <h1 className="text-4xl md:text-6xl font-bold">
                        <span className="text-[#ff823a]">Our</span> Blog
                    </h1>
                </div>
            </div>

            {/* Blog Cards Section */}
            <div className="shop-container px-[8%] lg:px-[12%] py-[50px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="blog-item bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                            
                            {/* Image or Video */}
                            <div className="blog-media relative overflow-hidden">
                                {blog.image && (
                                    <img
                                        src={blog.image}
                                        alt={blog.pere}
                                        className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                )}
                                {blog.video && (
                                    <video
                                        src={blog.video}
                                        className="w-full h-[250px] object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <div className="blog-content p-5 flex flex-col flex-grow">
                                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded mb-3">
                                    {blog.author}
                                </span>
                                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-semibold mb-3">
                                    {blog.title}
                                </span>

                                <h3 className="font-bricolage text-2xl font-semibold text-gray-900 mb-4">
                                    {blog.pere}
                                </h3>

                                {/* Author & Date */}
                                <div className="flex justify-between items-end mt-auto text-sm text-gray-600 mb-3">
                                    <div className="flex flex-col">
                                        <span className="font-bold">{blog.author}</span>
                                        <span>{blog.date}</span>
                                    </div>

                                    {/* Like & Comment */}
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1 text-red-500">
                                            <FaHeart /> <span>{blog.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-blue-500">
                                            <FaComment /> <span>{blog.comments}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;
