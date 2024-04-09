import React, { useEffect, useState } from 'react'
import { getCurrentUser } from '../apiCalls/users'
import {  useNavigate } from 'react-router-dom';
import {message} from 'antd';

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    const [user,setUser] = useState(null);
    
    const getValidUser = async () =>{
        try {
            const response =await getCurrentUser();
            console.log(response);
            setUser(response.data);
            
        } catch (error) {
            setUser(null);
            message.error(error.message);
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
    <div>{user && user.name}{children}</div>
  )
}

export default ProtectedRoute