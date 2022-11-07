import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

const HomeServicesCard = ({ service }) => {

    const { name, image, price, description, ratting } = service

    return (
        <div>
            <div className="flex flex-col justify-center w-full my-12 rounded-md bg-gray-200 text-gray-900">
                <img alt="" className="self-center flex-shrink-0 w-52 object-cover rounded-2xl h-40 -mt-12 bg-center drop-shadow-2xl bg-cover bg-gray-500" src={image} />
                <div className="flex-1 p-8">
                    <p className="text-2xl h-20 font-semibold leading-snug">{name}</p>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl font-semibold text-pink-600'>Price : {price}/hr</p>
                        <p className='text-xl font-semibold text-pink-600'>Ratting : {ratting}</p>
                    </div>
                    <p className='mt-2'>{description.slice(0, 99)}...</p>
                </div>
                <div className="flex items-center justify-center space-x-3 border-t-2 border-gray-300 p-5">
                    <button className='text-xl font-bold text-blue-600'>View Details</button>
                    <BiRightArrowAlt className='text-3xl text-blue-600 cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default HomeServicesCard;