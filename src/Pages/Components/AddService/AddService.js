import React from 'react';
import toast from 'react-hot-toast';
import { Helmet } from "react-helmet";

const AddService = () => {

    const handleAddService = (event) => {
        event.preventDefault()

        const form = event.target

        const service_name = form.name.value
        const service_image = form.image.value
        const service_ratting = form.ratting.value
        const service_price = form.price.value
        const service_description = form.description.value

        const addServiceInfo = {
            name: service_name,
            image: service_image,
            ratting: service_ratting,
            price: service_price,
            description: service_description
        }

        fetch('https://accounting-planners-server.vercel.app/services', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addServiceInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Service Added Successfully")
                    form.reset()
                }
            })
            .catch(e => {
                toast.error(e)
            })
    }

    return (
        <div className='w-9/12 mx-auto my-20 bg-gray-50 p-20 rounded-3xl shadow-xl'>
            <Helmet>
                <title>Accounting Planners - Add Service</title>
            </Helmet>
            <form onSubmit={handleAddService}>
                <div className='mb-8 grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className="space-y-2 shadow-2xl">
                        <label htmlFor="name" className="block text-sm">Service Name</label>
                        <input required type="text" name="name" id="name" placeholder="Service Name" className="w-full px-3 py-4 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-2 shadow-2xl">
                        <label htmlFor="image" className="block text-sm">Service Image</label>
                        <input required type="text" name="image" id="image" placeholder="Service Image" className="w-full px-3 py-4 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-2 shadow-2xl">
                        <label htmlFor="ratting" className="block text-sm">Service Ratting</label>
                        <input required type="number" step='any' name="ratting" id="ratting" placeholder="Service Ratting" className="w-full px-3 py-4 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-2 shadow-2xl">
                        <label htmlFor="price" className="block text-sm">Service Price</label>
                        <input required type="number" step='any' name="price" id="price" placeholder="Service Price" className="w-full px-3 py-4 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                </div>
                <div>
                    <label htmlFor="description" className="block text mb-2">Service Description</label>
                    <textarea required id="description" placeholder='typing...' rows="3" className="w-full text-gray-100 p-3 rounded bg-gray-800" name='description' spellCheck="false"></textarea>
                </div>
                <input className="w-full px-8 py-3 font-semibold rounded-md bg-gray-800 text-gray-100 cursor-pointer hover:bg-gray-900 duration-300" type="submit" value="Submit Your Review" />
            </form>
        </div>
    );
};

export default AddService;