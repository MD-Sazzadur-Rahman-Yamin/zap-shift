import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user, userLoading} = useAuth();
    const location = useLocation()
    if(userLoading){
        return (
          <div className='flex justify-center items-center min-h-screen'>
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        );
    }
    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return children
};

export default PrivateRouter;