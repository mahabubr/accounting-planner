import React from 'react';

const ServiceReviewForm = () => {
    return (
        <div>
            <form>
                <div className='flex justify-between items-center my-2'>
                    <label htmlFor="message" className="text-2xl font-semibold">Please Review</label>
                    <div>
                        <input id="name" type="text" placeholder="Ratting" required className="p-3 rounded bg-gray-800 text-gray-100 " />
                    </div>
                </div>
                <textarea required id="message" placeholder='Typing....' rows="3" className="w-full text-gray-100 p-3 rounded bg-gray-800" spellCheck="false"></textarea>
                <input className="w-full px-8 py-3 font-semibold rounded-md bg-gray-800 text-gray-100 cursor-pointer hover:bg-gray-900 duration-300" type="submit" value="Submit Your Review" />
            </form>
        </div>
    );
};

export default ServiceReviewForm;