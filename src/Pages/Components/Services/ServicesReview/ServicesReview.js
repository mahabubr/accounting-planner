import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../Contexts/AuthContext/AuthContext';
import ServiceReviewForm from './ServiceReviewForm/ServiceReviewForm';

const ServicesReview = () => {

    const { user } = useContext(UserContext)

    return (
        <div className='w-8/12 mx-auto'>
            <div>
                {
                    user
                        ?
                        <div>
                            <ServiceReviewForm />
                        </div>
                        :
                        <div className='text-center text-3xl font-semibold border-b-2 rounded-2xl p-2 border-blue-600 shadow-xl'>
                            <h2>Please <Link className='text-5xl font-bold text-orange-600' to="/login">login</Link> to add a review</h2>
                        </div>
                }
            </div>
        </div>
    );
};

export default ServicesReview;