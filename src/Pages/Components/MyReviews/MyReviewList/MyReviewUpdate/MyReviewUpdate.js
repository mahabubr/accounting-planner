import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const MyReviewUpdate = () => {

    const { message, service_name, _id } = useLoaderData()

    const handleUpdateUser = (event) => {
        event.preventDefault()

        const review = event.target.message.value

        const updateReview = {
            review
        }

        fetch(`http://localhost:5000/reviewService/update/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Update Review')
                    event.target.reset()
                }
            })
            .catch(e => {
                toast.error(e.message)
            })


    }

    return (
        <div className='my-20 w-8/12 mx-auto'>
            <div className='md:flex justify-between items-center my-2'>
                <label htmlFor="message" className="text-2xl font-semibold">Update Review</label>
                <div>
                    <input id="name" defaultValue={service_name} readOnly className="p-3 rounded bg-gray-800 text-gray-100 " />
                </div>
            </div>
            <form onSubmit={handleUpdateUser}>
                <textarea required id="message" placeholder={message} rows="3" className="w-full text-gray-100 p-3 rounded bg-gray-800" name='review_message' spellCheck="false"></textarea>
                <input className="w-full px-8 py-3 font-semibold rounded-md bg-gray-800 text-gray-100 cursor-pointer hover:bg-gray-900 duration-300" type="submit" value="Submit Your Review" />
            </form>
        </div>
    );
};

export default MyReviewUpdate;