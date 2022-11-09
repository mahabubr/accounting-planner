import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../Contexts/AuthContext/AuthContext';

const Login = () => {

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()

    const {
        googleSignIn,
        githubSignIn,
        facebookSignIn,
        createSignIn
    }
        = useContext(UserContext)


    const handleSignIn = (event) => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const password = form.password.value

        createSignIn(email, password)
            .then(result => {
                const user = result.user
                toast.success('Sign In Successfully Done')

                const userEmail = {
                    email: user.email
                }

                fetch('https://accounting-planners-server.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userEmail)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("token", data.token)
                        form.reset()
                        navigate(from, { replace: true })
                    })
                    .catch(e => console.log(e))

            })
            .catch(e => {
                toast.error(e.message)
            })

    }



    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                toast.success('Google Sign In Successfully Done')
                navigate(from, { replace: true })
            })
            .catch(e => {
                toast.error(e.message)
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user
                toast.success('Github Sign In Successfully Done')
                navigate(from, { replace: true })
            })
            .catch(e => {
                toast.error(e.message)
            })
    }

    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(result => {
                const user = result.user
                toast.success('Facebook Sign In Successfully Done')
                navigate(from, { replace: true })
            })
            .catch(e => {
                toast.error(e.message)
            })
    }

    return (
        <div>
            <Helmet>
                <title>Accounting Planners - Login</title>
            </Helmet>
            <div className="w-9/12 my-20 mx-auto p-4 rounded-md sm:p-8 ">
                <h2 className="mb-3 text-5xl font-semibold text-center">Login to your account</h2>
                <p className="text-lg text-center">Don't have account?
                    <Link to='/signup' rel="noopener noreferrer" className="focus:underline hover:underline text-blue-600"> Sign Up Here</Link>
                </p>
                <div className='block lg:flex justify-between items-center mt-8'>
                    <div className="my-6 lg:w-4/12 space-y-4">
                        <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
                            <BsGoogle />
                            <p>Login with Google</p>
                        </button>
                        <button onClick={handleGithubSignIn} aria-label="Login with GitHub" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
                            <BsGithub />
                            <p>Login with GitHub</p>
                        </button>
                        <button onClick={handleFacebookSignIn} aria-label="Login with Twitter" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
                            <FaFacebook />
                            <p>Login with Facebook</p>
                        </button>
                    </div>
                    <div className="flex items-center w-2/12 rotate-90 my-4">
                        <hr className="w-full text-gray-400" />
                        <p className="px-3 text-gray-400">OR</p>
                        <hr className="w-full text-gray-400" />
                    </div>
                    <form onSubmit={handleSignIn} noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid lg:w-6/12">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-4 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                    <Link rel="noopener noreferrer" to='/forget' className="text-xs hover:underline text-gray-400">Forgot password?</Link>
                                </div>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-4 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                            </div>
                        </div>
                        <input className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900 cursor-pointer hover:bg-violet-500 duration-300" type="submit" value="Sign in" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;