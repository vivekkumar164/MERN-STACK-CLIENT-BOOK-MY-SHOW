import React, { useEffect, useState } from 'react'
import { getCurrentUser } from '../apiCalls/users'
import {  Link, useNavigate } from 'react-router-dom';
import {message , Layout , Menu} from 'antd';
import { hideLoading, showLoading } from '../redux/loaderSlice';
import {useDispatch , useSelector} from 'react-redux';
import { Header } from "antd/es/layout/layout";
import {HomeOutlined , UserOutlined , ProfileOutlined , LogoutOutlined } from '@ant-design/icons'
import { setUser } from '../redux/userSlice';

const ProtectedRoute = ({children}) => {

    const {user} = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
 
    const navItems = [
        {
            label:'Home',
            icon:<HomeOutlined />
        },
        {
            label:`${user ? user.name : ' '}`,
            icon:<UserOutlined />,
            children:[
                {
                    label:<span onClick={()=> {user.isAdmin ? navigate('/admin') : navigate('/profile')}}>My Profile</span>,
                    icon:<ProfileOutlined />
                },
                {
                    label:<Link to='/login' onClick={()=>{localStorage.removeItem('token')}}>Log out</Link>,
                    icon:<LogoutOutlined />
                }
                
            ]
        }
    ];

   

    
    const getValidUser = async () =>{
        try {
            //show loader
            dispatch(showLoading());
            const response =await getCurrentUser();
            console.log(response);
            dispatch(setUser(response.data));

            //hide loader
            dispatch(hideLoading());
        } catch (error) {
            dispatch(setUser(null));
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
    // <div>{user && user.name}{children}</div>
    <>
    <Layout>
        <Header
        className="d-flex justify-content-between"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
        >
            <h3 className="demo-logo text-white m-0" style={{color:'white'}}>Book My Show</h3>

            <Menu theme='dark' mode='horizontal' items={navItems} />
        </Header>

        <div style={{ padding: 24, minHeight: 380, background: "#fff" }}>
            {children}
          </div>
          
    </Layout>
    </>
  )
}

export default ProtectedRoute