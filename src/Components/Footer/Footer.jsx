import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    const [email, setEmail] = useState('');
    const [showToast, setShowToast] = useState(false);
    const toastRef = useRef(null);
    const buttonRef = useRef(null);

    const handleSubscribe = () => {
        if (!email) return; // prevent empty email
        setShowToast(true);
        setEmail(''); // clear input
        setTimeout(() => setShowToast(false), 3000);
    }

    // Calculate toast position dynamically
    const [toastStyle, setToastStyle] = useState({});
    useEffect(() => {
        if (showToast && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setToastStyle({
                position: 'absolute',
                top: rect.bottom + window.scrollY + 8 + 'px',
                left: rect.left + window.scrollX + 'px',
                backgroundColor: '#ff823a',
                color: '#fff',
                padding: '10px 15px',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                zIndex: 9999,
            });
        }
    }, [showToast]);

    return (
        <>
            <footer className='bg-[#f8f8f8] mt-10 py-10 text-[#333] relative'>
                <div className='px-[8%] lg:px-[12%]'>
                    <div className='flex flex-col lg:flex-row gap-8'>
                        {/* Company Info */}
                        <div className='lg:w-2/3 w-full'>
                            <div className='flex flex-col md:flex-row gap-8'>
                                <div className='md:w-1/3'>
                                    <Link to='/' className='block mb-3'>
                                        <h2 className='text-3xl font-bold font-bricolage'>M/S <span className='text-[#ff823a]'>MC&B</span></h2>
                                    </Link>
                                    <p>
                                        We provide expert construction and engineering services, turning 3D designs into reality with precision and quality.
                                    </p>
                                </div>

                                {/* Useful Links */}
                                <div className="md:w-1/3">
                                    <h3 className="text-2xl font-semibold mb-3">Useful Links</h3>
                                    <ul>
                                        <li className="mb-2">
                                            <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                                className='text-[#333] hover:text-[#ff823a] transition-all duration-300 hover:ml-2 block'>
                                                Home
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to='/about' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                                className='text-[#333] hover:text-[#ff823a] transition-all duration-300 hover:ml-2 block'>
                                                About
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to='/services' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                                className='text-[#333] hover:text-[#ff823a] transition-all duration-300 hover:ml-2 block'>
                                                Services
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to='/projects' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                                className='text-[#333] hover:text-[#ff823a] transition-all duration-300 hover:ml-2 block'>
                                                Projects
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to='/contact' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                                className='text-[#333] hover:text-[#ff823a] transition-all duration-300 hover:ml-2 block'>
                                                Contact
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <a href='https://www.facebook.com/profile.php?id=100076183542840' target='_blank' rel='noreferrer'
                                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                                className='text-[#333] hover:text-[#ff823a] transition-all duration-300 hover:ml-2 block'>
                                                Facebook Page
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Services / Categories */}
                                <div className="md:w-1/3">
                                    <h3 className='text-2xl font-semibold mb-3'>Our Services</h3>
                                    <ul>
                                        <li className='mb-2'><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='text-[#333] hover:text-[#ff823a] transition-all duration-300 hover:ml-2 block'>Residential Construction</a></li>
                                        <li className='mb-2'><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='text-[#333] hover:text-[#ff823a] transition-all duration-300 hover:ml-2 block'>Commercial Buildings</a></li>
                                        <li className='mb-2'><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='text-[#333] hover:text-[#ff823a] transition-all duration-300 hover:ml-2 block'>Interior & Exterior Design</a></li>
                                        <li className='mb-2'><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='text-[#333] hover:text-[#ff823a] transition-all duration-300 hover:ml-2 block'>Project Consultation</a></li>
                                        <li className='mb-2'><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='text-[#333] hover:text-[#ff823a] transition-all duration-300 hover:ml-2 block'>Company Portfolio</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className='lg:w-1/3 w-full'>
                            <h3 className='text-2xl font-semibold mb-3'>Newsletter</h3>
                            <p className='mb-3'>
                                Enter your email below to be the first to know about our latest projects and construction innovations.
                            </p>
                            <div className='flex flex-col relative'>
                                <div className='flex'>
                                    <input
                                        type="email"
                                        className='flex-row px-4 py-3 border border-[#eeeee0] bg-white text-[#333] text-base focus:outline-none'
                                        placeholder='Enter your email address'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button
                                        ref={buttonRef}
                                        onClick={handleSubscribe}
                                        className='border-r-2 rounded-r-xl px-5 bg-[#ff823a] text-white font-semibold hover:bg-[#e5722c] transition-all'
                                    >
                                        Get Updates
                                    </button>
                                </div>

                                {/* Toast below button */}
                                {showToast && (
                                    <div style={toastStyle}>
                                        Sent successfully!
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="mt-10 pt-5 border-t border-gray-200">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="flex flex-col lg:flex-row items-center gap-3">
                                <p className='text-center lg:text-right'>
                                    ©️ 2025 | All Rights Reserved by
                                    <a href="https://www.facebook.com/sumita.akter.771/" target='_blank' className='text-[#ff823a]'> Somita </a> | M/S MC&B Construction
                                </p>
                                <div className='flex gap-3 text-xl text-[#333]'>
                                    <i className='hover:text-[#ff823a] transition ri-instagram-line cursor-pointer'></i>
                                    <i className='hover:text-[#ff823a] transition ri-twitter-x-line cursor-pointer'></i>
                                    <a href='https://www.facebook.com/sumita.akter.771/' target='blank' className='hover:text-[#ff823a] transition ri-facebook-circle-fill cursor-pointer'></a>
                                    <a href='https://github.com/SumitaAkter' target='blank' className='hover:text-[#ff823a] transition ri-github-fill cursor-pointer'></a>
                                    <i className='hover:text-[#ff823a] transition ri-youtube-fill cursor-pointer'></i>
                                </div>
                            </div>

                            {/* Back to Top Icon */}
                            <div className="flex gap-2 justify-center">
                                <i
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="ri-arrow-up-line text-3xl text-[#ff823a] cursor-pointer hover:text-[#e5722c] transition-colors"
                                    title="Back to Top"
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
