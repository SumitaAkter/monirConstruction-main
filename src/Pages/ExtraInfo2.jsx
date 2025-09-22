import React from 'react';
import bannerImage from "../assets/section-banner.jpg";
import about1 from '../assets/about1.jpeg';

const ExtraInfo2 = () => {
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
                        <span className="text-[#ff823a]">Building </span>Construction
                    </h1>
                </div>
            </div>

            {/* First Section with Image */}
            <div className="px-[8%] lg:px-[12%] py-16 flex flex-col lg:flex-row items-start gap-10">
                {/* Left Content */}
                <div className="lg:w-1/2 flex flex-col justify-start">
                    <div className="w-12 h-[2px] bg-[#ff823a] mb-4"></div>
                    <h2 className="capitalize text-2xl font-bold text-gray-800 mb-4">
                        Building Construction
                    </h2>
                    <h4 className='font-semibold mb-4'>Sub-Category</h4>

                    {/* Numbered List */}
                    <ol className="list-decimal list-inside space-y-3 text-gray-700 font-semibold">
                        <li>
                            1. Project Management Consultancy (PMC)
                            <ol className="list-decimal list-inside ml-8 mt-2 font-normal">
                                <li>A. To assign professional civil engineer</li>
                                <li>B. Look after labor management function</li>
                                <li>C. To provide required building materials BOQ</li>
                                <li>D. Building materials QC</li>
                                <li>E. To check labor bill</li>
                            </ol>
                        </li>

                        <li>
                            2. Complete Construction Service (CCS)
                            <ol className="list-decimal list-inside ml-8 mt-2 font-normal">
                                <li>A. Project management schedule planning</li>
                                <li>
                                    B. To assign professional engineering team
                                    <ol className="list-decimal list-inside ml-12 mt-1 font-normal">
                                        <li>a) Civil engineer on site</li>
                                        <li>b) Site supervisor (store manager role / materials receiving / housekeeping / QC)</li>
                                        <li>c) Security guard (having CCTV camera) - 24 hours</li>
                                    </ol>
                                </li>
                                <li>
                                    C. To arrange all building materials (Buying / Payment / Receiving / QC)
                                    <ol className="list-decimal list-inside ml-12 mt-1 font-normal">
                                        <li>a) Corporate rate of building materials</li>
                                        <li>b) Supplier payment</li>
                                        <li>c) Product QC during receiving</li>
                                        <li>d) To solve local hassle</li>
                                    </ol>
                                </li>
                                <li>
                                    D. Sub-contractor management
                                    <ol className="list-decimal list-inside ml-12 mt-1 font-normal">
                                        <li>a) Sub-contractor selection</li>
                                        <li>b) Contractor rate fixing</li>
                                        <li>c) Labor work schedule</li>
                                        <li>d) Labor work QC by proper monitoring</li>
                                        <li>e) To prepare labor bill and payment accordingly</li>
                                        <li>f) Wastage control on project by proper monitoring</li>
                                        <li>g) Project store management / report making / Audit etc.</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                    <img
                        src={about1}
                        alt="Building Consultancy"
                        className="w-full lg:h-[400px] h-auto object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </div>
        </>
    );
};

export default ExtraInfo2;
