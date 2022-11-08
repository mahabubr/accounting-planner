import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../Contexts/AuthContext/AuthContext';
import MyReviewList from './MyReviewList/MyReviewList';

const MyReviews = () => {

    const { user } = useContext(UserContext)

    const [myReviews, setMyReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviewService?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])

    return (
        <div className='w-8/12 mx-auto my-32'>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-200">
                    <thead className=" text-gray-100  uppercase bg-gray-700">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Services Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Your Review Message
                            </th>
                            <th scope="col" className="py-3 px-6">
                                See Review
                            </th>
                            <th scope="col" className="py-3 px-6">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReviews.map(review => <MyReviewList key={review._id} review={review} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;