import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import profile2 from '../assets/profile-2.jpeg';
import profile3 from '../assets/profile-3.jpeg';
import profile4 from '../assets/profile-4.jpeg';
import profile5 from '../assets/profile-5.jpeg';
import profile6 from '../assets/profile-6.jpeg';


//data
import products from '../Products.json'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import bannerImage from "../assets/section-banner.jpg";
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


const ProductDetails = () => {
    const { id } = useParams();
    const project = products.find((p) => p.id === parseInt(id));

    const [mainImage, setMainImage] = useState('');
    const [images, setImages] = useState([]);
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        if (project) {
            setMainImage(project.image);
            setImages([project.image, project.secondImage].filter(Boolean));
        }
    }, [project]);

    if (!project) return <p className="text-center text-xl py-20">Project not found</p>;

    const addToWishlist = () => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const existing = wishlist.find((item) => item.id === project.id);

        if (!existing) {
            wishlist.push(project);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            window.dispatchEvent(new Event('wishlistUpdated'));
            toast.success(`${project.productname} added to your wishlist!!`);
        } else {
            toast.info(`${project.productname} is already in your wishlist!!`);
        }
    };

    return (
        <>
            {/* Hero Banner */}
            <div className="w-full h-96 bg-cover bg-center relative flex items-center justify-center" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
                <div className="relative z-10 text-center text-white">
                    <p className="uppercase tracking-widest mb-2">- M/s Monir Construction & Builders</p>
                    <h1 className="text-4xl md:text-6xl font-bold">{project.productname}</h1>
                    
                </div>
            </div>

            <ToastContainer />

            {/* Project Details */}
            <div className="px-[8%] lg:px-[12%] py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex md:flex-col gap-4 w-full md:w-1/4">
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Thumb ${idx}`}
                                onClick={() => setMainImage(img)}
                                className={`w-full h-24 md:h-28 rounded-lg object-cover cursor-pointer border-2 ${mainImage === img ? 'border-orange-500' : 'border-gray-200'}`}
                            />
                        ))}
                    </div>
                    <div className="w-full md:w-3/4 rounded-lg overflow-hidden shadow-lg">
                        <img src={mainImage} alt="Main" className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                </div>

                {/* Project Info */}
                <div className="flex flex-col justify-start gap-6">
                    <h2 className="text-3xl font-bold">{project.productname}</h2>
                    <p className="text-xl text-gray-700 font-medium">{project.price}</p>
                    <p className="text-gray-600">{project.ddes}</p>

<hr />
                    <div className="grid grid-cols-1 gap-4 text-gray-600">
                        <span>Vendor: <span className="font-semibold text-black">{project.vendor}</span></span>
                        <span>Category: <span className="font-semibold text-black">{project.category}</span></span>
                        <span>Project Location: <span className="font-semibold text-black">{project.location}</span></span>
                    </div>
                    <div className="flex gap-4">
  <button 
    onClick={addToWishlist} 
    className="flex items-center justify-center gap-2 w-full py-3 text-white bg-black hover:bg-[#ff823a] rounded-lg font-semibold transition"
  >
    <i className="bi bi-heart-fill"></i>
    Add To Wishlist
  </button>

  <button 
     
    className="flex items-center justify-center gap-2 w-full py-3 text-white bg-black hover:bg-[#ff823a] rounded-lg font-semibold transition"
  >
    <i className="bi bi-telephone-fill"></i>
    Call Now
  </button>
</div>

                    
                </div>
            </div>

            {/* Tabs */}
           <div className="px-[8%] lg:px-[12%] py-16">
  {/* Tabs */}
  <div className="flex justify-center gap-6 mb-8 border-b-2">
    <button
      onClick={() => setActiveTab('description')}
      className={`px-6 py-2 font-semibold text-lg ${activeTab === 'description' ? 'border-b-4 border-orange-500 text-orange-500' : 'text-gray-500'}`}
    >
      Description
    </button>
    <button
      onClick={() => setActiveTab('specs')}
      className={`px-6 py-2 font-semibold text-lg ${activeTab === 'specs' ? 'border-b-4 border-orange-500 text-orange-500' : 'text-gray-500'}`}
    >
      Specifications
    </button>
  </div>

  {/* Tab Content */}
  <div>
    {activeTab === 'description' && (
      <div className="text-gray-700 space-y-6">
        {/* Main Title */}
        {project.dtitle && <h3 className="text-2xl font-bold text-gray-800">{project.dtitle}</h3>}

        {/* Description Paragraph */}
        {project.ddes && <p className="text-gray-700">{project.ddes}</p>}
        {project.location && <p className="text-gray-700 underline">Project Location: {project.location}</p>}


        {/* Subsection */}
        {project.dsubtitle && (
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-gray-800">{project.dsubtitle}</h4>
            {project.dsubdes && project.dsubdes.length > 0 && (
              <ul className="list-disc list-inside mt-2 space-y-1">
                {project.dsubdes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    )}

    {activeTab === 'specs' && (
  <div className="text-gray-700 space-y-5">
    <div>
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Project Specification:</h2>
      <p className="font-semibold text-[#ff823a]">Total Land: <span className="text-gray-800">{project.totalLand}</span></p>
      <p className="font-semibold text-[#ff823a]">Total Flats: <span className="text-gray-800">{project.totalFlats}</span></p>
      <p className="font-semibold text-[#ff823a]">Total Units Per Flat: <span className="text-gray-800">{project.unitsPerFlat}</span></p>
      <p className="font-semibold text-[#ff823a]">Flat Size: <span className="text-gray-800">{project.flatSize}</span></p>
      <p className="font-semibold text-[#ff823a]">Total Parking: <span className="text-gray-800">{project.totalParking}</span></p>
    </div>
    <hr />
    {/* Heading */}
    <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">
      Specifications
    </h3>

    {/* If specs exists */}
    {project.specs ? (
      <ul className="space-y-2">
        {Object.entries(project.specs).map(([key, value], idx) => (
          <li
            key={idx}
            className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm"
          >
            <span className="font-semibold text-gray-800">{key}</span>
            <span className="text-gray-600">{value}</span>
          </li>
        ))}
      </ul>
    ) : (
      /* Fallback - show dsubdes */
      <ul className="list-disc list-inside space-y-2">
        {project.dsubdes.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    )}

    {/* Company Info Add */}
    <div className="mt-6 border-t pt-4">
      <h4 className="text-lg font-semibold text-gray-800">
        About Our Company
      </h4>
      <p className="mt-2 text-gray-600 leading-relaxed">
        We are <span className="font-medium text-[#ff823a]">M/s Monir Construction & Builders</span>, 
        committed to providing high-quality materials and services. From design 
        to final delivery, we maintain international standards and ensure the 
        best value for our clients.
      </p>
    </div>
  </div>
)}

  </div>
</div>

<div className="py-6 px-[8%] lg:px-[12%] text-center">
  <h2 className="text-4xl font-bricolage font-bold mb-12">Customer Reviews</h2>
  <Swiper
    spaceBetween={20}
    slidesPerView={3}
    modules={[Autoplay]}
    loop={true}
    autoplay={{ delay: 3000 }}
    breakpoints={{
      1399: { slidesPerView: 3 },
      991: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    }}
  >
    <SwiperSlide>
      <Testimonial
        image={profile2}
        name="Rahim Uddin"
        role="Verified Buyer"
        text="This product is exactly what I was looking for. Excellent quality and totally worth the price!"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Testimonial
        image={profile3}
        name="Sabrina Akter"
        role="Customer"
        text="Superb build quality and very comfortable to use. Highly recommended!"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Testimonial
        image={profile4}
        name="Imran Hossain"
        role="Happy Client"
        text="Fast delivery and the packaging was great. The product works perfectly."
      />
    </SwiperSlide>
    <SwiperSlide>
      <Testimonial
        image={profile6}
        name="Taimur Rahman"
        role="Verified Buyer"
        text="I have been using this for a few weeks now, and it has exceeded my expectations."
      />
    </SwiperSlide>
    <SwiperSlide>
      <Testimonial
        image={profile5}
        name="Ataur Rahman"
        role="Customer"
        text="Affordable, durable, and stylish. I’m planning to order another one soon."
      />
    </SwiperSlide>
  </Swiper>
</div>

            {/* Recommended Projects */}
            <div className="px-[8%] lg:px-[12%] py-6">
                <h2 className="text-3xl font-bold mb-4">Recommended Projects</h2>
                <p className="text-gray-500 mb-8">Explore similar construction projects</p>
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
                >
                    {products.filter(p => p.id !== project.id && p.id <= 27).map(p => (
                        <SwiperSlide key={p.id}>
                            <Link to={`/product/${p.id}`} className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                                <div className="relative w-full h-60 md:h-64">
                                    <img to={`/project/${project.id}`} src={p.image} alt={p.productname} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                                    {p.tag && <span className={`absolute top-2 left-2 text-xs px-2 py-1 rounded text-white ${p.tag === 'Sale' ? 'bg-red-600' : 'bg-green-600'}`}>{p.tag}</span>}
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold">{p.productname}</h3>
                                    <p className="text-gray-700">{p.price}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default ProductDetails;
