import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../Contexts/AuthContext/AuthContext';
import MyReviewList from './MyReviewList/MyReviewList';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const MyReviews = () => {

    const { user, logOut } = useContext(UserContext)

    const [myReviews, setMyReviews] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch(`https://accounting-planners-server.vercel.app/reviewService?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                setLoading(false)
                return res.json();
            })
            .then(data => setMyReviews(data))
    }, [user?.email, logOut])

    const handleDeleteList = (userReview) => {
        const confirm = window.confirm('Are You Sure To Delete Your Review')
        if (confirm) {
            fetch(`https://accounting-planners-server.vercel.app/reviewService/${userReview._id}`, {
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

    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    }

    return (
        <div className='w-8/12 mx-auto my-32'>
            <Helmet>
                <title>Accounting Planners - My Review</title>
            </Helmet>
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