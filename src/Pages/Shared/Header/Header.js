import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineAlignCenter } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assets/logo.png'
import { UserContext } from '../../../Contexts/AuthContext/AuthContext';

const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const { user, logOut } = useContext(UserContext)
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out Successfully')
            })
            .catch(e => {
                toast.error(e.message)
            })
    }

    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link to="/"
                        className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
                    >
                        <div className='flex justify-center items-center'>
                            <img className='w-16' src={logo} alt="" />
                            <p className='text-2xl'>Accounting Planners</p>
                        </div>
                    </Link>
                    <button
                        className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <AiOutlineAlignCenter />
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex justify-center bg-slate-300 w-full lg:w-fit lg:bg-white items-center flex-col lg:flex-row list-none lg:ml-auto p-6">
                        <li className="nav-item">
                            <NavLink to='/' end
                                className={({ isActive }) => isActive
                                    ?
                                    'px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug mr-6 text-blue-600 border-b-2 border-blue-600'
                                    :
                                    'px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug mr-6'
                                }
                            >
                                <p>Home</p>
                            </NavLink>
                        </li>
                        {
                            user
                                ?
                                <>
                                    <li className="nav-item">
                                        <button onClick={handleLogOut} className='px-8 py-3 text-lg font-semibold rounded bg-pink-400 text-gray-900 hover:bg-pink-500 duration-300'>
                                            Log Out
                                        </button>
                                    </li>
                                    <Link to='/profile'>
                                        <div className="relative flex-shrink-0 ml-6">
                                            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 border-2 rounded-full text-gray-100 border-white"></span>
                                            <img src={user?.photoURL} alt="" className="w-12 h-12 border-2 rounded-full p-1 border-gray-800" />
                                        </div>
                                    </Link>
                                </>
                                :
                                <li className="nav-item">
                                    <NavLink to='/login' end
                                        className={({ isActive }) => isActive
                                            ?
                                            "px-8 py-3 text-lg font-semibold rounded bg-violet-200 text-gray-900 ml-6 mr-6"
                                            :
                                            "px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900 ml-6 mr-6"
                                        }
                                    >
                                        Login
                                    </NavLink>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;