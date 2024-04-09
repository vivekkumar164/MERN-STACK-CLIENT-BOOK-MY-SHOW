import React from 'react';
import { Button , Form , Input} from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <header className="App-header">
        <main className='main-area mw-500 text-center px-3'>
            <section className='left-section'>
                <h1>Login to book my show</h1>
            </section>

            <section className="right-section">
                <Form layout='vertical'>
              

                    <Form.Item 
                    label="Email" 
                    htmlFor='email'
                    name='email'
                    className='d-block'
                    rules={[{required:true, message : 'This field is required'}]}
                    >
                    
                        <Input 
                        id='email'
                        type='email'
                        placeholder='Enter your email'
                        ></Input>
                    </Form.Item >

                    <Form.Item 
                    label="Password" 
                    htmlFor='password'
                    name='password'
                    className='d-block'
                    rules={[{required:true, message : 'This field is required'}]}
                    >
                    
                        <Input 
                        id='password'
                        type='password'
                        placeholder='Enter your name'
                        ></Input>
                    </Form.Item >

                    <Form.Item  className='d-block'>
                       <Button 
                       type='primary' block
                       htmlFor='submit'
                       style={{fontSize:"1rem" , fontWeight: "600"}}
                       >Login</Button>
                    </Form.Item>
                </Form>

                <div>
                    <p>New user please register? <Link to='/register'>Register here</Link></p>
                </div>
            </section>
        </main>
    </header>
    </>
  )
}

export default Login