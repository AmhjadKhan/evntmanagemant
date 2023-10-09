import React, { useContext } from 'react'
import { AuthContex } from '../Authprovid/Authprovider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRote = ({children}) => {
    const {user,loding} = useContext(AuthContex);
    const location = useLocation();
    console.log(location)
    
    if(loding){
        return <h1>loading...</h1>;
    }

    if(user){
        return children;
    }
  return <Navigate to='/login'></Navigate>
}

export default PrivateRote
