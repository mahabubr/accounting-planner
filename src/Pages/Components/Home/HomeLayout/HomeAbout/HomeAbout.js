import React from 'react';
import { TbCheckbox } from 'react-icons/tb';
import { FiUsers } from 'react-icons/fi';
import { FaAward } from 'react-icons/fa';
import { BiSupport, BiCoffee } from 'react-icons/bi';
import { AiOutlineFieldTime } from 'react-icons/ai';

const HomeAbout = () => {
    return (
        <div className='my-12'>
            <div className="container w-8/12 mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex overflow-hidden rounded-lg bg-violet-900 text-violet-100 h-28">
                    <div className="flex text-3xl items-center justify-center px-10 bg-violet-400 text-violet-800">
                        <TbCheckbox />
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                        <p className="text-4xl font-semibold">200+</p>
                        <p>Projects</p>
                    </div>
                </div>
                <div className="flex overflow-hidden rounded-lg bg-violet-900 text-violet-100 h-28">
                    <div className="flex text-3xl items-center justify-center px-10 bg-violet-400 text-violet-800">
                        <FiUsers />
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                        <p className="text-4xl font-semibold">7 500+</p>
                        <p>Customers</p>
                    </div>
                </div>
                <div className="flex overflow-hidden rounded-lg bg-violet-900 text-violet-100 h-28">
                    <div className="flex text-3xl items-center justify-center px-10 bg-violet-400 text-violet-800">
                        <FaAward />
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                        <p className="text-4xl font-semibold">14</p>
                        <p>Awards</p>
                    </div>
                </div>
                <div className="flex overflow-hidden rounded-lg bg-violet-900 text-violet-100 h-28">
                    <div className="flex text-3xl items-center justify-center px-10  bg-violet-400 text-violet-800">
                        <BiSupport />
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                        <p className="text-4xl font-semibold">24/7 h</p>
                        <p>Support</p>
                    </div>
                </div>
                <div className="flex overflow-hidden rounded-lg bg-violet-900 text-violet-100 h-28">
                    <div className="flex text-3xl items-center justify-center px-10  bg-violet-400 text-violet-800">
                        <AiOutlineFieldTime />
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                        <p className="text-4xl font-semibold">99,9 %</p>
                        <p>Uptime</p>
                    </div>
                </div>
                <div className="flex overflow-hidden rounded-lg bg-violet-900 text-violet-100 h-28">
                    <div className="flex text-3xl items-center justify-center px-10  bg-violet-400 text-violet-800">
                        <BiCoffee />
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                        <p className="text-4xl font-semibold">720 L</p>
                        <p>Coffee</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;