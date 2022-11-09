import React from 'react';
import { BsApple, BsMicrosoft } from 'react-icons/bs';
import { AiOutlineAmazon } from 'react-icons/ai';
import { TbBrandMeta } from 'react-icons/tb';
import { FaYahoo } from 'react-icons/fa';
import { SiIntel, SiTesla, SiBmw } from 'react-icons/si';

const TrustedBy = () => {
    return (
        <div data-aos="zoom-out" className='my-16 w-10/12 mx-auto'>
            <h1 className='text-center text-5xl font-bold border-b-2 py-4'>Trusted by the industry leaders</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-20 mx-auto w-8/12 text-5xl text-gray-500'>
                <BsApple />
                <AiOutlineAmazon />
                <TbBrandMeta />
                <FaYahoo />
                <SiIntel />
                <BsMicrosoft />
                <SiTesla />
                <SiBmw />
            </div>
        </div>
    );
};

export default TrustedBy;