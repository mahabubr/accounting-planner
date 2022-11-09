import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ServicesCard from './ServicesCard/ServicesCard';

const Services = () => {

    const [services, setServices] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://accounting-planners-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                return setServices(data)
            })
            .catch(e => console.log(e))
    }, [])

    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
            </div>
    }

    return (
        <div className='my-24'>
            <Helmet>
                <title>Accounting Planners - Services</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-10/12 mx-auto">
                {
                    services.map(service => <ServicesCard key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;