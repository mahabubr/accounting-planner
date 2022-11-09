import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../Contexts/AuthContext/AuthContext';
import MyReviewList from './MyReviewList/MyReviewList';
import toast from 'react-hot-toast';

const MyReviews = () => {

    const { user } = useContext(UserContext)

    const [myReviews, setMyReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviewService?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])

    const handleDeleteList = (userReview) => {

        const confirm = window.confirm('Are You Sure To Delete Your Review')

        if (confirm) {
            fetch(`http://localhost:5000/reviewService/${userReview._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Your Review Deleted')
                        const remainingReview = myReviews.filter(rev => rev._id !== userReview._id)
                        setMyReviews(remainingReview)
                    }
                })
                .catch(e => {
                    toast.error(e.message)
                })
        }
    }

    return (
        <div className='w-8/12 mx-auto my-32'>
            {
                myReviews.length > 0
                    ?
                    <>
                        <div className='mb-6 text-3xl font-bold text-center text-purple-700'>
                            <h2>You Have {myReviews.length} Reviews</h2>
                        </div>
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
                                        myReviews.map(review => <MyReviewList key={review._id} review={review} handleDeleteList={handleDeleteList} />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                    :
                    <div className='mb-6 text-3xl font-bold text-center text-purple-700'>
                        <h2>No Reviews Were Added</h2>
                    </div>
            }

        </div>
    );
};

export default MyReviews;