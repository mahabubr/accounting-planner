import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { UserContext } from '../../../../../Contexts/AuthContext/AuthContext';

const ServiceReviewForm = ({ serviceId }) => {

    const { user } = useContext(UserContext)

    const current = new Date()
    const current_time = current.toLocaleTimeString()
    const current_date = current.toLocaleDateString()

    const currentDateInfo = `${current_time} ${current_date}`

    const handleReviewForm = (event) => {
        event.preventDefault()

        const form = event.target

        const ratting = form.ratting.value
        const review_message = form.review_message.value

        const userReviewServices = {
            user_name: user.displayName,
            user_email: user.email,
            user_image: user.photoURL,
            message: review_message,
            ratting: ratting,
            time: currentDateInfo,
            service_id: serviceId
        }

        fetch(`http://localhost:5000/reviewService/`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userReviewServices)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset()
                    toast.success('Your Review Added')
                }
            })
            .catch(e => {
                toast.error(e.message)
            })

    }

    return (
        <div>
            <form onSubmit={handleReviewForm}>
                <div className='md:flex justify-between items-center my-2'>
                    <label htmlFor="message" className="text-2xl font-semibold">Please Review</label>
                    <div>
                        <input id="name" name='ratting' type="number" step="any" placeholder="Ratting" required className="p-3 rounded bg-gray-800 text-gray-100 " />
                    </div>
                </div>
                <textarea required id="message" placeholder='Typing....' rows="3" className="w-full text-gray-100 p-3 rounded bg-gray-800" name='review_message' spellCheck="false"></textarea>
                <input className="w-full px-8 py-3 font-semibold rounded-md bg-gray-800 text-gray-100 cursor-pointer hover:bg-gray-900 duration-300" type="submit" value="Submit Your Review" />
            </form>
        </div>
    );
};

export default ServiceReviewForm;