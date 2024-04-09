import React, { useEffect, useState } from 'react'
import { getCurrentUser } from '../apiCalls/users'
import {  useNavigate } from 'react-router-dom';
import {message} from 'antd';
import { hideLoading, showLoading } from '../redux/loaderSlice';
import {useDispatch , useSelector} from 'react-redux';

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    const [user,setUser] = useState(null);
    const dispatch = useDispatch();

    
    const getValidUser = async () =>{
        try {
            //show loader
            dispatch(showLoading());
            const response =await getCurrentUser();
            console.log(response);
            setUser(response.data);

            //hide loader
            dispatch(hideLoading());
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