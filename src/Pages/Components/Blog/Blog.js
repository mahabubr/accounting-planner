import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <div className='my-20 w-8/12 mx-auto'>
            <Helmet>
                <title>Accounting Planners - Blog</title>
            </Helmet>
            <section className="bg-gray-100 text-gray-800 rounded-2xl">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Difference between SQL and NoSQL</summary>
                            <div className="px-4 pb-4">
                                <p>
                                    SQL database like MySQL, PostgreSQL and NoSQL database like MongoDB, GraphQL. SQL databases have fixed or static and NoSQL database are dynamic. SQL databases are best complex Projects and NoSQL have not to good for complex one.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is JWT, and how does it work</summary>
                            <div className="px-4 pb-4">
                                <p>
                                    JWT is a json web token. developer use for data in secure and private. jot token will be change on some time. and developer store user json token local storage or http only cookie. http only cookie more then secure to local storage.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is the difference between javascript and NodeJS</summary>
                            <div className="px-4 pb-4">
                                <p>
                                    JavaScript is a Programming Language. and NodeJS is a JavaScript runtime environment. JavaScript use in browser or client side. on web developer or many uses have javascript it run in v8 engine. and NodeJS use in Backend or Client Side.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How does NodeJS handle multiple requests at the same time</summary>
                            <div className="px-4 pb-4">
                                <p>
                                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                                </p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;