import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServicesCard from './HomeServicesCard/HomeServicesCard';

const HomeServices = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/home-services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(e => console.log(e))
    }, [])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-10/12 mx-auto">
                {
                    services.map(service => <HomeServicesCard key={service._id} service={service} />)
                }
            </div>
            <div className='text-center mb-8'>
                <Link to='/services'>
                    <button className='bg-sky-600 px-8 hover:bg-sky-700 duration-300 py-3 text-xl text-white rounded-lg'>See All</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeServices;