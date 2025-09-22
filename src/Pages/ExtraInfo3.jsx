import React from 'react';
import bannerImage from "../assets/section-banner.jpg";
import about1 from '../assets/extrainfo3.jpg';

const ExtraInfo3 = () => {
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
                        <span className="text-[#ff823a]">Building Materials Support and Services </span>Support and Services
                    </h1>
                </div>
            </div>

            {/* Main Section with Image */}
            <div className="px-[8%] lg:px-[12%] py-16 flex flex-col lg:flex-row items-start gap-10">
                {/* Left Content */}
                <div className="lg:w-1/2 flex flex-col justify-start space-y-6">
                    <div className="w-12 h-[2px] bg-[#ff823a] mb-4"></div>
                    <h2 className="capitalize text-2xl font-bold text-gray-800 mb-4">
                        Support and Services
                    </h2>

                    {/* Numbered List */}
                    <ol className="list-decimal list-inside space-y-3 text-gray-700 font-semibold">
                        <li>
                            Building Materials & Home Service
                            <ol className="list-decimal list-inside ml-8 mt-2 font-normal space-y-1">
                                <li>
                                    A. Categories of Building Materials
                                    <ul className="list-disc list-inside ml-6 space-y-1">
                                        <li><strong>Water and Gas Supply:</strong>
                                            <ul className="list-decimal list-inside ml-6 space-y-1">
                                                <li>a) Boring pipe: Class & Non-Class pipe</li>
                                                <li>b) Plumbing pipe: SWR pipe & fittings, Thread pipe & fittings, CPVC pipe & fittings</li>
                                                <li>c) Electrical Pipe: Electrical Hose pipe, Conduit pipe & fittings</li>
                                                <li>d) Hose pipe: Suction, Garden, Braided, Lay-flat, Gas Hose</li>
                                                <li>e) Metal Pipe: GI pipe, MS pipe</li>
                                                <li>f) Water Tank</li>
                                                <li>g) Motor</li>
                                                <li>h) Pump: Industrial, Submersible</li>
                                                <li>i) Tub-well</li>
                                            </ul>
                                        </li>
                                        <li><strong>Safety & Security:</strong>
                                            <ul className="list-decimal list-inside ml-6 space-y-1">
                                                <li>a) Door: PVC, Wooden, Metal, Fire</li>
                                                <li>b) Window</li>
                                                <li>c) Sheet, Ceiling & Wall Panel</li>
                                                <li>d) CCTV Camera</li>
                                                <li>e) Fire Extinguisher</li>
                                            </ul>
                                        </li>
                                        <li><strong>Construction:</strong>
                                            <ul className="list-decimal list-inside ml-6 space-y-1">
                                                <li>a) Paints</li>
                                                <li>b) Lift</li>
                                                <li>c) Sand</li>
                                                <li>d) Stone</li>
                                                <li>e) Cement</li>
                                                <li>f) Rod</li>
                                                <li>g) Bricks</li>
                                                <li>h) Block</li>
                                                <li>i) Accessories: Kodal, Belcha, Kurni, Welding Rod</li>
                                            </ul>
                                        </li>
                                        <li><strong>Electrical:</strong>
                                            <ul className="list-decimal list-inside ml-6 space-y-1">
                                                <li>a) Fan: Ceiling, Table, Exhaust</li>
                                                <li>b) Lighting: LED, CFL, Tube light</li>
                                                <li>c) Switch & Socket</li>
                                                <li>d) Multi-plug</li>
                                                <li>e) Cables</li>
                                                <li>f) Electric accessories: Cable tie, Royal plug</li>
                                            </ul>
                                        </li>
                                        <li><strong>Kitchenware:</strong>
                                            <ul className="list-decimal list-inside ml-6 space-y-1">
                                                <li>a) Gas Stove</li>
                                                <li>b) Gas Oven</li>
                                                <li>c) Cooker Hood</li>
                                                <li>d) Sink</li>
                                                <li>e) Kitchen Cabinet</li>
                                                <li>f) Home Appliances</li>
                                            </ul>
                                        </li>
                                        <li><strong>Sanitary Ware:</strong>
                                            <ul className="list-decimal list-inside ml-6 space-y-1">
                                                <li>a) Bathroom Fittings: Bib Cock, Sink Cock, Shower, Angle bulb, Magic pipe</li>
                                                <li>b) Sanitary ware: Flush tank, Tissue Holder, Soap Case, Towel Hanger</li>
                                                <li>c) Geyser & Water Heater</li>
                                                <li>d) Ceramics: Commode & Basin</li>
                                                <li>e) Tiles: Floor & Wall Tiles</li>
                                            </ul>
                                        </li>
                                        <li><strong>Accessories:</strong>
                                            <ul className="list-decimal list-inside ml-6 space-y-1">
                                                <li>a) Hardware Tools: Hammer, Plus, Range</li>
                                                <li>b) Floor Mat: S-Mat, Coil Mat</li>
                                                <li>c) Ladder</li>
                                                <li>d) Weight Scale</li>
                                                <li>e) Dustbin</li>
                                                <li>f) Plate</li>
                                                <li>g) Tufting Brass</li>
                                                <li>h) Vertical transport devices</li>
                                                <li>i) Steel framing</li>
                                                <li>j) Surface finishing</li>
                                                <li>k) Interior decoration materials</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>B. Home Service: We provide installation & repair services for sanitary, electrical, mason, carpenter, tiles, etc.</li>
                                <li>C. Paint Solution</li>
                                <li>D. Renovation</li>
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

export default ExtraInfo3;
