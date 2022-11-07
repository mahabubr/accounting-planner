import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard/ServicesCard';

const Services = () => {

    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className='my-24'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-10/12 mx-auto">
                {
                    services.map(service => <ServicesCard key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;