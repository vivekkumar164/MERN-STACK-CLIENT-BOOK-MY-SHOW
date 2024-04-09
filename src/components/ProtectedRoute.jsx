import React, { useEffect } from 'react'
import { getCurrentUser } from '../apiCalls/users'
import {  useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    const getValidUser = async () =>{
        try {
            const response =await getCurrentUser();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        if(localStorage.getItem('token')){
            getValidUser();
        }else{
            navigate('/login');
        }
        
    },[]);
  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute