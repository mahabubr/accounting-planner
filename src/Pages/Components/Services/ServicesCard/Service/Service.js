import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { GoVerified } from 'react-icons/go';
import ServicesReview from '../../ServicesReview/ServicesReview';
import { Helmet } from 'react-helmet';


const Service = () => {

    const { image, name, description, price, ratting, _id } = useLoaderData()


    return (
        <div>
            <Helmet>
                <title>Accounting Planners - Services Info</title>
            </Helmet>
            <section className="my-20">
                <div className="container flex items-center flex-col mx-auto lg:flex-row">
                    <div className="w-10/12 mx-auto lg:w-2/4">
                        <img src={image} className="rounded-3xl hover:scale-105 duration-500 border-2 p-2 shadow-2xl border-pink-400" alt="" />
                    </div>
                    <div className="flex flex-col w-10/12 mx-auto p-6 lg:w-2/4 md:p-8 lg:p-12">
                        <GoVerified className='text-3xl text-blue-600 mb-4' />
                        <h2 className="text-5xl font-bold leading-none">{name}</h2>
                        <p className="mt-4 mb-2 text-sm">{description}</p>
                        <div className='flex text-2xl text-pink-600 font-semibold justify-between items-center'>
                            <p>Price : {price}/hr</p>
                            <p>Ratting : {ratting}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-20'>
                <ServicesReview serviceId={_id} serviceName={name} />
            </section>
        </div>
    );
};

export default Service;