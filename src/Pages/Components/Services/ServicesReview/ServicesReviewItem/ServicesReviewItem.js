import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';

const ServicesReviewItem = ({ item }) => {

    const { user_name, user_image, message, ratting, time } = item

    return (
        <div className="container flex flex-col w-full my-8 max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={user_image} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">{user_name}</h4>
                        <span className="text-xs dark:text-gray-400">{time}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                    <AiTwotoneStar />
                    <span className="text-xl font-bold">{ratting}</span>
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ServicesReviewItem;