import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../Contexts/AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(UserContext)

    const location = useLocation()

    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />

};

export default PrivateRoute;