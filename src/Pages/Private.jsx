import React, { use } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const Private = ({children}) => {
    const {user, loading}= use(AuthContext);
    const location = useLocation();
    if(loading){
        return <p>Loading...</p>
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate state={location?.pathname} to="/login"></Navigate>
        </div>
    );
};

export default Private;