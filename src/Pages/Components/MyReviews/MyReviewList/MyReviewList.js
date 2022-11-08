import React from 'react';
import { FaRecycle } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MyReviewList = ({ review, handleDeleteList }) => {

    const { service_name, message, service_id } = review

    return (
        <tr className="border-b text-gray-900 font-bold text-lg">
            <th scope="row" className="py-4 px-6">
                {service_name}
            </th>
            <td className="py-4 px-6">
                {message}
            </td>
            <td className="py-4 px-6 text-sm text-blue-500">
                <Link to={`/services/${service_id}`}>
                    GO
                </Link>
            </td>
            <td className="py-4 px-6 flex justify-center text-2xl items-center">
                <FaRecycle className='text-blue-800 mr-2 cursor-pointer' />
                <AiFillDelete onClick={() => handleDeleteList(review)} className='text-red-500 ml-2 cursor-pointer' />
            </td>
        </tr>
    );
};

export default MyReviewList;