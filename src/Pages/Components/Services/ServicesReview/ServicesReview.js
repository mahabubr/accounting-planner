import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../Contexts/AuthContext/AuthContext';
import ServiceReviewForm from './ServiceReviewForm/ServiceReviewForm';
import ServicesReviewItem from './ServicesReviewItem/ServicesReviewItem';

const ServicesReview = ({ serviceId, serviceName }) => {

    const { user } = useContext(UserContext)

    const [reviewItem, setReviewItem] = useState([])

    const [reload, setReload] = useState(true)

    useEffect(() => {
        fetch(`https://accounting-planners-server.vercel.app/reviewService/${serviceId}`)
            .then(res => {
                setReload(!reload)
                return res.json()
            })
            .then(data => setReviewItem(data))
    }, [serviceId, reload])

    return (
        <div className='w-8/12 mx-auto'>
            <div>
                {
                    user
                        ?
                        <div>
                            <ServiceReviewForm serviceId={serviceId} serviceName={serviceName} />
                        </div>
                        :
                        <div className='text-center text-3xl font-semibold border-b-2 rounded-2xl p-2 border-blue-600 shadow-xl'>
                            <h2>Please <Link className='text-5xl font-bold text-orange-600' to="/login">login</Link> to add a review</h2>
                        </div>
                }
            </div>
            <div className='my-20 lg:w-7/12 mx-auto'>
                {
                    reviewItem.map(item => <ServicesReviewItem key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default ServicesReview;