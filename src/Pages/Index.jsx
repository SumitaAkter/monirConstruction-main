import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { FaCheck } from 'react-icons/fa';

//data
import products from '../Products.json';
import flatsData from '../FlatesData.json';

import serviceImg1 from '../assets/service-icon-1.svg';
import serviceImg2 from '../assets/service-icon-2.svg';
import serviceImg3 from '../assets/service-icon-3.svg';
import serviceImg4 from '../assets/service-icon-4.svg';

import brand1 from '../assets/brand-1.png';
import brand2 from '../assets/brand-2.png';
import brand3 from '../assets/brand-3.png';
import brand4 from '../assets/brand-4.png';
import brand5 from '../assets/brand-5.png';
import brand6 from '../assets/brand-6.png';
import brand7 from '../assets/brand-7.png';
import brand8 from '../assets/brand-8.png';

import hero1 from '../assets/Hero-1.png';
import hero2 from '../assets/Hero-2.png';
import projectBanner from '../assets/project-bannar.jpeg';
import about_image from '../assets/about-image.jpeg';
import building_1 from '../assets/Building-1.webp';
import building_2 from '../assets/Building-2.webp';
import building_3 from '../assets/Building-3.webp';


const Index = () => {
    const [filterSortOption, setfilterSortOption] = useState('all');
    const navigte = useNavigate();

    const addToWishlist = (products) => {
        const existing = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (!existing.some(p => p.id === products.id)) {
            const updated = [...existing, products];
            localStorage.setItem('wishlist', JSON.stringify(updated));
            window.dispatchEvent(new Event('wishlistUpdated'));
            toast.success(`${products.productname} added to your wishlist!`)
        } else {
            toast.info(`${products.productname} is already in your wishlist.`)
        }
    };
    const addToCart = (products) => {
        const existing = JSON.parse(localStorage.getItem('cart')) || [];
        if (!existing.some(p => p.id === products.id)) {
            const updated = [...existing, products];
            localStorage.setItem('cart', JSON.stringify(updated));
            window.dispatchEvent(new Event('cartUpdated'));
            toast.success(`${products.productname} added to your cart!`)
        } else {
            toast.info(`${products.productname} is already in your cart.`)
        }
    };



    return (
        <>
            {/** Hero */}
            <div className="hero w-full">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    modules={[EffectFade, Autoplay]}
                    effect="fade"
                    loop={true}
                    autoplay={{ delay: 4000 }}
                >
                    <SwiperSlide>
                        <div className='hero-wrap px-[8%] lg:px-[12%] flex flex-col-reverse lg:flex-row items-center justify-between gap-6 min-h-[500px] lg:min-h-[600px] mt-6 lg:mt-0'>

                            {/* Text Content */}
                            <div className="hero-content lg:w-1/2 text-center lg:text-left flex flex-col justify-center mt-4 lg:mt-0">
                                <h5 className="text-[#ff823a] font-semibold mt-0 mb-2">- Trusted Construction Solutions -</h5>
                                <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                                    Building Your <span className='text-[#ff823a]'>Dream Projects</span>
                                </h1>
                                <p className='text-gray-700 mb-4'>
                                    We deliver high-quality residential, commercial, and industrial construction services with precision, efficiency, and safety.
                                </p>
                                <div className="mt-auto">
                                    <a
                                        href="/contact#message-section"
                                        className='px-6 py-3 bg-[#ff823a] rounded-lg font-semibold hover:bg-[#e5722c] transition'
                                    >
                                        Get a Quote
                                    </a>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end items-center overflow-hidden rounded-lg">
                                <img
                                    src={hero1}
                                    alt="Construction Hero 1"
                                    className="max-h-full lg:max-h-[500px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='hero-wrap px-[8%] lg:px-[12%] flex flex-col-reverse lg:flex-row items-center justify-between gap-6 min-h-[500px] lg:min-h-[600px] mt-6 lg:mt-0'>

                            {/* Text Content */}
                            <div className="hero-content lg:w-1/2 text-center lg:text-left flex flex-col justify-center mt-4 lg:mt-0">
                                <h5 className="text-[#ff823a] font-semibold mt-0 mb-2">- Professional Construction Services -</h5>
                                <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                                    Your Vision, <span className='text-[#ff823a]'>Our Expertise</span>
                                </h1>
                                <p className='text-gray-700 mb-4'>
                                    From planning to execution, we ensure top-quality construction with modern technology and experienced professionals.
                                </p>
                                <div className="mt-auto">
                                    <a href="/get-quote" className='px-6 py-3 bg-[#ff823a] rounded-lg font-semibold hover:bg-[#e5722c] transition'>
                                        Contact Us
                                    </a>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end items-center overflow-hidden rounded-lg">
                                <img
                                    src={hero2}
                                    alt="Construction Hero 2"
                                    className="max-h-full lg:max-h-[500px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/** Products */}
            <div className="products-container px-[8%] lg:px-[12%] py-[50px] my-12">
    <div className="relative">
        <div className="row">
            <div className="section-title mb-12 product-title text-center">
                <h2 className='font-semibold text-3xl'>Our Latest Projects</h2>
                <p className="text-gray-500">Get The Trending Buildings Design</p>
            </div>
        </div>
        <Swiper
            slidesPerView={4}
            spaceBetween={20}
            modules={[Navigation]}
            navigation={{ nextEl: ".product-swiper-next", prevEl: ".product-swiper-prev" }}
            breakpoints={{
                1399: { slidesPerView: 4 },
                1199: { slidesPerView: 3 },
                991: { slidesPerView: 2 },
                767: { slidesPerView: 1.5 },
                0: { slidesPerView: 1 },
            }}
            className='mt-4 swiper relative'
        >
            {products.filter(product => product.id >= 1 && product.id <= 8).map(product => (
                <SwiperSlide key={product.id}>
                    <div className="product-item text-center relative">
                        <Link 
                            to={`/product/${product.id}`} 
                            className='no-underline text-black'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <div className="product-image w-full relative overflow-hidden rounded-lg">
                                <img
                                    src={product.image}
                                    alt="product"
                                    className="w-full h-[250px] lg:h-[300px] object-cover transition-transform duration-300"
                                />
                                <img
                                    src={product.secondImage}
                                    alt="product"
                                    className="w-full h-[250px] lg:h-[300px] object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition duration-300"
                                />
                                <div className="product-icons gap-3 flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 transition duration-300">
                                    <div className="product-icon cursor-pointer" title='Add to Wishlist' onClick={(e) => { e.preventDefault(); addToWishlist(product); }}>
                                        <i className='bi bi-heart text-lg'></i>
                                    </div>
                                </div>
                                {product.tag && (
                                    <span className={`badge text-white absolute top-2 left-2 text-xs px-2 py-1 rounded ${product.tag === 'Sale' ? 'bg-red-600' : 'bg-green-600'}`}>
                                        {product.tag}
                                    </span>
                                )}
                            </div>
                        </Link>
                        <div className="product-content pt-2">
                            <span className='price no-underline'>
                                {product.price}
                            </span>
                            <h3 className='title'>
                                {product.productname}
                            </h3>
                        </div>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    </div>
</div>


            {/** Services */}
            <div className='px-[8%] lg:px-[12%] pb-[50px] py-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

                    <div>
                        <img src={serviceImg1} alt="Quality Construction" className='w-[100px] mx-auto' />
                        <h4 className='mb-2 text-2xl font-bricolage font-semibold'>Quality Construction</h4>
                        <p className='text-gray-600 text-sm font-medium'>
                            Delivering strong and durable projects with precision.
                        </p>
                    </div>

                    <div>
                        <img src={serviceImg2} alt="On-Time Delivery" className='w-[100px] mx-auto' />
                        <h4 className='mb-2 text-2xl font-bricolage font-semibold'>On-Time Delivery</h4>
                        <p className='text-gray-600 text-sm font-medium'>
                            We complete projects within the promised timeline.
                        </p>
                    </div>

                    <div>
                        <img src={serviceImg3} alt="Expert Support" className='w-[100px] mx-auto' />
                        <h4 className='mb-2 text-2xl font-bricolage font-semibold'>Expert Support</h4>
                        <p className='text-gray-600 text-sm font-medium'>
                            Professional guidance from planning to execution.
                        </p>
                    </div>

                    <div>
                        <img src={serviceImg4} alt="Flexible Solutions" className='w-[100px] mx-auto' />
                        <h4 className='mb-2 text-2xl font-bricolage font-semibold'>Flexible Solutions</h4>
                        <p className='text-gray-600 text-sm font-medium'>
                            Tailored services to meet your construction needs.
                        </p>
                    </div>

                </div>
            </div>

            {/** discover */}
            <section id="about" className="px-5 sm:px-[8%] lg:px-[12%] py-12 sm:py-16 my-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

                    {/* Company Photo */}
                    <div className="company__photo w-full h-full">
                        <img
                            src={about_image}
                            alt="M/S Monir Construction & Builders"
                            className="w-full h-full rounded-lg shadow-lg object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Company Info */}
                    <div className="company__info w-full flex flex-col justify-between h-full">
                        <div>
                            <h1 className="title text-sm text-center sm:text-xl lg:text-lg font-bold mb-2">
                                About <span className="g-text text-[#ff823a]">Us</span>
                            </h1>
                            <h3 className="sub__title text-center text-lg sm:text-xl lg:text-2xl mb-4 font-medium text-gray-700">
                                Realizing visions through fundamental focus.
                            </h3>

                            {/* Media / Project Thumbnails */}
                            <div className="company__media__container flex justify-center items-center gap-3 mb-4">
                                {[building_1, building_2, building_3].map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="w-20 sm:w-28 h-20 sm:h-28 rounded-lg overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 flex-shrink-0"
                                    >
                                        <img
                                            src={img}
                                            alt={`Building ${idx + 1}`}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base text-justify">
                                At M/S Monir Construction & Builders, we craft more than buildings — we shape lasting
                                trust and bold futures. Blending innovation with integrity, we turn ideas into
                                enduring landmarks. From cozy homes to powerful commercial spaces, every project
                                reflects our promise of quality, reliability, and forward-thinking design.
                            </p>

                            {/* Features / Services */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                {[
                                    { title: "Consultation", subtitle: "Free" },
                                    { title: "Expert", subtitle: "Engineers" },
                                    { title: "Customers", subtitle: "Support" },
                                    { title: "Quality", subtitle: "Service" },
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow hover:shadow-md hover:text-[#ff823a] transition duration-300"
                                    >
                                        <div className="text-text-[#ff823a] hover:text-[#ff823a] text-2xl flex-shrink-0">
                                            <FaCheck />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">{item.title}</p>
                                            <h3 className="font-semibold text-base sm:text-lg">{item.subtitle}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <Link
                                to="/projects"
                                className="px-6 py-3 border border-blue-700 text-blue-700 rounded hover:bg-[#ff823a] text-center transition"
                            >
                                Explore
                            </Link>
                            <Link
                                to="/contact"
                                className="px-6 py-3 bg-black text-white rounded hover:bg-[#ff823a] text-center transition"
                            >
                                Get a quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>



            {/** Seen in */}
            <div className='text-center px-[8%] lg:px-[12%] seen-in'>
                <div>
                    <h1 className='mb-5 font-semibold text-2xl'>Trusted By Leading Brands</h1>
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
                        <SwiperSlide>
                            <img src={brand1} className='w-[200px] h-[80px] object-cover border rounded border-black p-3' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={brand2} className='w-[200px] h-[80px] object-cover border rounded border-black p-3' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={brand3} className='w-[200px] h-[80px] object-cover border rounded border-black p-3' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={brand4} className='w-[200px] h-[80px] object-cover border rounded border-black p-3' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={brand5} className='w-[200px] h-[80px] object-cover border rounded border-black p-3' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={brand6} className='w-[200px] h-[80px] object-cover border rounded border-black p-3' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={brand7} className='w-[200px] h-[80px] object-cover border rounded border-black p-3' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={brand8} className='w-[200px] h-[80px] object-cover border rounded border-black p-3' alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {/** favourite beauty */}

            <div className='favourite-construction px-[8%] lg:px-[12%] py-[50px] my-5'>
                <div>
                    <div className="grid grid-cols-1 mb-5">
                        <div className="section-title mb-5 w-full text-center">
                            <h2 className='font-semibold text-3xl'>Our Customers’ Favourite Construction Solutions</h2>
                            <p className="text-gray-500">We provide reliable, durable, and modern construction services tailored to your needs.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mx-auto">
                        {/* Banner Section */}
                        <div className="w-full lg:col-span-4">
                            <div className="construction-banner mb-5 lg:mb-0 relative rounded">
                                <img src={projectBanner} alt="construction banner" className='w-full h-[400px] object-cover rounded-lg' />
                                <div className='construction-banner-title absolute bottom-5 left-5 z-10 bg-black/50 p-4 rounded'>
                                    <h3 className='text-2xl font-semibold text-[#ff823a]'>Building Trust, Brick by Brick</h3>
                                    <p className='text-md text-white'>Delivering quality construction for your dream projects.</p>
                                    <button className='btn mt-3 px-4 py-2 rounded btn-default bg-[#ff823a] text-white'>Explore More</button>
                                </div>
                            </div>
                        </div>

                        {/* Projects / Services Section */}
                        <div className="w-full lg:col-span-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                {products.filter(project => project.id >= 11 && project.id <= 16).map(project => (
                                    <div className='w-full mb-0' key={project.id}>
                                        <div className="project-item text-center relative">
                                            <div className="project-image w-full h-[250px] relative overflow-hidden rounded-lg">
                                                <img src={project.image} alt="project" className="w-full h-full object-cover" />
                                                <div className="project-icons gap-3 flex justify-center items-center absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition duration-300">
                                                    <div className="project-icon cursor-pointer bg-white p-2 rounded-full" title='View Details'>
                                                        <i className='bi bi-eye text-lg text-black'></i>
                                                    </div>
                                                    <div className="project-icon cursor-pointer bg-white p-2 rounded-full" title='Get Quote'>
                                                        <i className='bi bi-chat-dots text-lg text-black'></i>
                                                    </div>
                                                </div>
                                                {project.tag && (
                                                    <span className={`badge text-white absolute top-2 left-2 text-xs px-2 py-1 rounded ${project.tag === 'Ongoing' ? 'bg-blue-600' : 'bg-green-600'}`}>
                                                        {project.tag}
                                                    </span>
                                                )}
                                            </div>
                                            <Link to={`/project/${project.id}`} className='no-underline text-black'>
                                                <div className="project-content pt-2">
                                                    <span className='text-sm text-gray-500'>
                                                        {project.category}
                                                    </span>
                                                    <h3 className='title font-semibold text-lg'>
                                                        {project.projectname}
                                                    </h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/** Flate */}
            <div className="products-container px-[8%] lg:px-[12%] py-[20px] my-1">
                <div className="relative">
                    <div className="row">
                        <div className="section-title mb-12 product-title text-center">
                            <h2 className='font-semibold text-3xl'>Ready Flats to Sale</h2>
                            <p className="text-gray-500">Get The Trending Dream Flat</p>
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
                        {flatsData.flats.filter(flat => flat.id >= 1 && flat.id <= 8).map(flat => (
                            <SwiperSlide key={flat.id}>
                                <div className="product-item text-center relative">
                                    <Link to={`/product/${flat.id}`} className='no-underline text-black'>
                                        <div className="product-image w-full relative overflow-hidden rounded-lg">
                                            <img
                                                src={flat.images[0]}
                                                alt={flat.title}
                                                className="w-full h-[250px] sm:h-[280px] md:h-[300px] lg:h-[320px] xl:h-[350px] object-cover transition-transform duration-300 hover:scale-105"
                                            />

                                            {flat.status && (
                                                <span className={`badge text-white absolute top-2 left-2 text-xs px-2 py-1 rounded ${flat.status === 'Available' ? 'bg-green-600' : 'bg-red-600'}`}>
                                                    {flat.status}
                                                </span>
                                            )}
                                        </div>
                                    </Link>
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

export default Index;