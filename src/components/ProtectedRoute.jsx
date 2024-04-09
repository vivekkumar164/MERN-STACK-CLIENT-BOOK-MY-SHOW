import React, { useEffect, useState } from 'react'
import { getCurrentUser } from '../apiCalls/users'
import {  useNavigate } from 'react-router-dom';
import {message , Layout , Menu} from 'antd';
import { hideLoading, showLoading } from '../redux/loaderSlice';
import {useDispatch , useSelector} from 'react-redux';
import { Header } from "antd/es/layout/layout";
import {HomeOutlined , UserOutlined } from '@ant-design/icons'

const ProtectedRoute = ({children}) => {
 
    const navItems = [
        {
            label:'Home',
            icon:<HomeOutlined />
        },
        {
            label:'Profile',
            icon:<UserOutlined />
        }
    ];

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
    </Layout>
    </>
  )
}

export default ProtectedRoute