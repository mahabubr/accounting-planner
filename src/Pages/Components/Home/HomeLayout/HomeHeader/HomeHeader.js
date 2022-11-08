import React from 'react';
import img1 from '../../../../../Assets/Banner/pic-1.png'
import img2 from '../../../../../Assets/Banner/pic-2.png'
import img3 from '../../../../../Assets/Banner/pic-3.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (
        <div className='w-10/12  mx-auto my-12'>
            <Swiper
                navigation={true}
                autoplay={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <section className="">
                        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                <h1 className="text-5xl font-bold leading-none sm:text-6xl">What does an <span className="text-violet-400">Accountant</span> do?
                                </h1>
                                <p className="mt-6 mb-8 text-lg sm:mb-12">
                                    An Accountant takes care of all financial matters within a company, like keeping and interpreting financial records. They may oversee responsibilities like reconciling bank statements and calculating payroll to keep their company in strong financial standing.
                                </p>
                                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                    <Link to="/login" rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Login</Link>
                                    <Link to='/' rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Learn More</Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="">
                        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                <h1 className="text-5xl font-bold leading-none sm:text-6xl"><span className="text-violet-400">responsibilities</span> an Accountant?
                                </h1>
                                <p className="mt-6 mb-8 text-lg sm:mb-12">
                                    The responsibilities of an Accountant can be quite extensive, from auditing financial documents and conducting financial audits to reconciling bank statements and calculating taxes when filling out annual returns. Additional certification (CPA or CMA) is a plus.
                                </p>
                                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                    <Link to="/login" rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Login</Link>
                                    <Link to='/' rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Learn More</Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="">
                        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                                    What make <span className="text-violet-400">good</span> Accountant?
                                </h1>
                                <p className="mt-6 mb-8 text-lg sm:mb-12">
                                    A good accountant is not just someone with finance skills but also an expert in human relations and communication. have exceptional integrity as they oversee financial records, and they must have strong communication skills to present detailed information in a manner that’s easy to understand.
                                </p>
                                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                    <Link to="/login" rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Login</Link>
                                    <Link to='/' rel="noopener noreferrer"className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Learn More</Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                <img src={img3} alt="" />
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomeHeader;