import React from 'react';
import bannerImage from "../assets/section-banner.jpg";
import extrainfo1 from '../assets/extrainfo.jpg';
import interior from '../assets/Interior.jpeg'

const ExtraInfo1 = () => {
    const subCategories = [
        {
            main: 'Building Design',
            details: [
                'a. Architectural planning and design',
                'b. Structural planning and design',
                'c. Plumbing planning and design',
                'd. Electrical planning and design',
                'e. BOQ',
                'f. As Built Drawing'
            ]
        },
        { main: 'Digital Land survey', details: ['-'] },
        { main: 'Soil test', details: ['-'] },
        { main: 'RAJUK/CDA/LOCAL govt. approval', details: ['-'] },
        { main: 'Interior planning and design', details: ['-'] },
        { main: 'Financial Solution', details: ['-'] },
    ];

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
                        <span className="text-[#ff823a]">Building </span>Consultancy
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
                    <h4 className='font-semibold mb-4'>Building design:</h4>
                    <p className="text-gray-600 mb-8">
                        We specialize in delivering both residential and non-residential construction projects with precision and quality. Our expertise also extends to electro-mechanical works, as well as interior design, decoration, and complete renovation services.
                    </p>
                    <h4 className='font-semibold mb-4'>Interior Solution:</h4>
                    <p className="text-gray-600 mb-8">
                        We are specialized in interior design to enhance building aesthetics. Complete flat interior solutions are available for living rooms, drawing rooms, bedrooms, and kitchens as per client’s demand.
                    </p>
                    <h4 className='font-semibold mb-4'>Financial Solutions:</h4>
                    <p className="text-gray-600 mb-8">
                        We help clients secure finance to build their dream projects after meeting certain conditions.
                    </p>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                    <img
                        src={extrainfo1}
                        alt="Building Consultancy"
                        className="w-full lg:h-[400px] h-auto object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </div>
            <div className="px-[8%] lg:px-[12%] py-6 flex flex-col lg:flex-row items-start gap-10">

                {/* Left Image */}
                <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
                    <img
                        src={interior}
                        alt="Building Consultancy"
                        className="w-full lg:max-w-[500px] h-auto object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Right Content: Table */}
                <div className="lg:w-1/2 w-full flex flex-col justify-start">
                    <h2 className="text-3xl font-bold mb-6 text-[#ff823a]">Our Services & Sub-Categories</h2>
                    <table className="w-full max-w-[500px] border border-gray-200 rounded-lg overflow-hidden text-sm">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="py-2 px-3 text-left">Sub-Category</th>
                                <th className="py-2 px-3 text-left">Details</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {subCategories.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition">
                                    <td className="py-2 px-3 font-medium align-top">{item.main}</td>
                                    <td className="py-2 px-3">
                                        <ul className="list-disc list-inside space-y-1">
                                            {item.details.map((detail, dIdx) => (
                                                <li key={dIdx}>{detail}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

        </>
    );
};

export default ExtraInfo1;
