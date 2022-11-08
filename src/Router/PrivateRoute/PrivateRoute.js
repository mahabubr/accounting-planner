import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(UserContext)

    if (user) {
        return children
    }

    return <Navigate to='/login' />

};

export default PrivateRoute;