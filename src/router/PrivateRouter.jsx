
import React from 'react'
import useAuth from '../hooks/useAuth'
import LoadingPage from '../pages/LoadingPage';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter =({children}) =>{

    const {user, loading}=useAuth();
    const location = useLocation();

    if(loading){
        return <LoadingPage/>
    }
    if(!user){
       return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
  return children
}

export default PrivateRouter