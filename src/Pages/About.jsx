import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import about from '../assets/About.webp';
import about1 from '../assets/about1.jpeg';
import about2 from '../assets/about2.jpeg';
import about3 from '../assets/about3.jpeg';

import bannerImage from '../assets/section-banner.jpg';

import brand1 from '../assets/brand-1.png';
import brand2 from '../assets/brand-2.png';
import brand3 from '../assets/brand-3.png';
import brand4 from '../assets/brand-4.png';
import brand5 from '../assets/brand-5.png';
import brand6 from '../assets/brand-6.png';
import brand7 from '../assets/brand-7.png';
import brand8 from '../assets/brand-8.png';

import team1 from '../assets/team-1.jpeg';
import team2 from '../assets/team-2.jpeg';
import team3 from '../assets/team-3.jpeg';
import team4 from '../assets/team-4.jpeg';
import team5 from '../assets/team-5.jpeg';
import team6 from '../assets/team-6.jpeg';
import team7 from '../assets/team-7.jpeg';
import team8 from '../assets/team-8.jpeg';
import team9 from '../assets/team-9.jpeg';

import profile2 from '../assets/profile-2.jpeg';
import profile3 from '../assets/profile-3.jpeg';
import profile4 from '../assets/profile-4.jpeg';
import profile5 from '../assets/profile-5.jpeg';
import profile6 from '../assets/profile-6.jpeg';




// Testimonial Component
const Testimonial = ({ image, name, role, text }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <img
                src={image}
                alt={name}
                className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h4 className="font-bold text-lg mb-1">{name}</h4>
            <p className="text-sm text-gray-500 mb-3">{role}</p>
            <p className="text-gray-600 text-center">{text}</p>
        </div>
    );
};

const About = () => {
    return (
        <>
            {/* Banner */}
            <div className="">
                      <div
                        className="py-10 mt-[70px] relative bg-cover bg-center flex items-center justify-center"
                        style={{ backgroundImage: `url(${bannerImage})` }}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                        <div className="relative z-10 text-center text-white px-5">
                          <h6 className="uppercase mb-2 text-sm md:text-lg">- M/S Monir Construction & Builders</h6>
                          <h1 className="text-3xl md:text-5xl font-bold">
                            <span className="text-[#ff823a]">About</span> Us
                          </h1>
                        </div>
                      </div>
                

            {/* About Sections */}
            <div className="py-10 px-[8%] lg:px-[12%] mb-4">
                {/* First About Block */}
                <div className="mb-10 flex flex-col lg:flex-row items-center gap-10">
                    <div className="w-full lg:w-1/2 overflow-hidden group">
                        <img
                            src={about}
                            alt="Construction Work"
                            className="w-full transition-transform duration-500 group-hover:scale-110 rounded-xl"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h4 className="font-bold text-2xl md:text-4xl mb-3 font-bricolage">
                            Our Construction Story
                        </h4>
                        <span className="block mb-3 text-md md:text-xl font-semibold">
                            Building Dreams Into Reality
                        </span>
                        <p className="text-gray-500 leading-relaxed mb-3 text-sm lg:text-lg">
                            Monir Construction & Builders provides comprehensive construction services, specializing in residential, commercial, and industrial projects. With quality materials, skilled labor, and modern technology, we deliver projects on time and within budget.
                        </p>
                        <button className="py-2 px-4 bg-black text-white text-md lg:text-xl rounded-md">
                            Discover Now
                        </button>
                    </div>
                </div>

                {/* Second About Block: Same-size Zigzag Images */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
                    <div className="w-full lg:w-1/2 relative flex flex-col justify-between h-[450px]">
                        <img
                            src={about1}
                            alt="High Quality Materials"
                            className="w-4/5 h-36 lg:h-40 mx-auto rounded-xl shadow-lg object-cover transition-transform duration-500 hover:scale-105 -translate-x-6 lg:-translate-x-6 mb-6"
                        />
                        <img
                            src={about2}
                            alt="High Quality Materials"
                            className="w-4/5 h-36 lg:h-40 mx-auto rounded-xl shadow-lg object-cover transition-transform duration-500 hover:scale-105 translate-x-6 lg:translate-x-6 mb-6 relative z-10"
                        />
                        <img
                            src={about3}
                            alt="High Quality Materials"
                            className="w-4/5 h-36 lg:h-40 mx-auto rounded-xl shadow-lg object-cover transition-transform duration-500 hover:scale-105 -translate-x-6 lg:-translate-x-6 relative z-20"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h4 className="font-bold text-xl md:text-4xl mb-3 font-bricolage">
                            100% High-Quality Materials
                        </h4>
                        <p className="text-gray-500 leading-relaxed mb-3 text-sm lg:text-lg">
                            We ensure every project uses the finest materials and craftsmanship for lasting durability, safety, and aesthetics.
                        </p>
                    </div>
                </div>
            </div>

            {/* Trusted Brands */}
            <div className="text-center px-[8%] lg:px-[12%] my-16">
                <h2 className="mb-8 font-semibold text-2xl">Trusted By Leading Brands</h2>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={6}
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{ delay: 2000 }}
                    breakpoints={{
                        1399: { slidesPerView: 6 },
                        1199: { slidesPerView: 6 },
                        991: { slidesPerView: 4 },
                        575: { slidesPerView: 2 },
                        0: { slidesPerView: 2 }
                    }}
                >
                    {[brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8].map((brand, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={brand}
                                className="w-[200px] h-[80px] object-cover border rounded border-black p-3"
                                alt={`brand-${index}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Team Members */}
            <div className="py-10 px-[8%] lg:px-[12%] bg-gray-50 text-center">
                <h2 className="text-4xl font-bricolage font-bold mb-10">Our Team</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {[
                        { img: team1, name: "Engr. Md. Moniruzzaman", role: "Proprietor" },
                        { img: team2, name: "Md. Hridoy Sarker", role: "Architect" },
                        { img: team7, name: "Shovic Ahamed", role: "Structural Engineer from UTS, Sydney" },
                        { img: team5, name: "Somita Akter", role: "Software Engineer" },
                        { img: team3, name: "Md. Rafiul Hasan", role: "Project Engineer" },
                        { img: team4, name: "Shakil Hossain", role: "Project Engineer" },
                        { img: team6, name: "Md. Irfanur Rahman Shihab", role: "Project Engineer" },
                        { img: team8, name: "Md. Rakib Hasan", role: "Project Engineer" },
                        { img: team9, name: "Umme Kulsum Rupa", role: "AutoCad Designer" },
                    ].map((member, index) => (
                        <div key={index} className="w-[220px] relative group ">
                            <div className="w-full h-[280px] overflow-hidden rounded-xl rounded-t-lg relative bg-white flex items-center justify-center">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 flex justify-center items-center gap-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl">
                                    <a href="#" className="text-white hover:text-[#ff823a]"><i className="ri-instagram-line"></i></a>
                                    <a href="#" className="text-white hover:text-[#ff823a]"><i className="ri-facebook-line"></i></a>
                                    <a href="#" className="text-white hover:text-[#ff823a]"><i className="ri-twitter-line"></i></a>
                                    <a href="#" className="text-white hover:text-[#ff823a]"><i className="ri-youtube-line"></i></a>
                                </div>
                            </div>
                            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                            <p className="text-sm text-gray-500">- {member.role}</p>
                        </div>
                    ))}
                </div>
            </div>




            {/* Testimonials */}
            <div className="py-16 px-[8%] lg:px-[12%] text-center">
                <h2 className="text-4xl font-bricolage font-bold mb-12">What Our Clients Say</h2>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        1399: { slidesPerView: 3 },
                        991: { slidesPerView: 2 },
                        0: { slidesPerView: 1 }
                    }}
                >
                    <SwiperSlide>
                        <Testimonial
                            image={profile2}
                            name="Rahim Uddin"
                            role="Homeowner"
                            text="Monir Construction transformed my dream home into reality! The quality and attention to detail are amazing."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial
                            image={profile3}
                            name="Sabrina Akter"
                            role="Business Owner"
                            text="Professional, reliable, and timely delivery. Our office building exceeded all expectations."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial
                            image={profile4}
                            name="Imran Hossain"
                            role="Industrial Client"
                            text="From planning to execution, the team was professional and communicative. Highly recommended!"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial
                            image={profile6}
                            name="Taimur Rahman"
                            role="Assistant Manager"
                            text="From planning to execution, the team was professional and communicative. Highly recommended!"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial
                            image={profile5}
                            name="Ataur Rahman"
                            role="Industrial Client"
                            text="From planning to execution, the team was professional and communicative. Highly recommended!"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            </div>
        </>
    );
};

export default About;
