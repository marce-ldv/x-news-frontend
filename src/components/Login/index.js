import React from 'react'
import 'antd/dist/antd.css';
// import './index.scss';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const Login = () => {
    
    const handleSubmit = evt => {
        console.log(evt)
        evt.preventDefault();
    }

    return(
        <div>
            <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item>
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="text"
                        placeholder="Enter your username"
                        style={{ width: 200 }}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Enter your password"
                        style={{ width: 200 }}
                    />
                </Form.Item>
                <Form.Item>
                    <Checkbox>Remember me</Checkbox>
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <a href="">register now!</a>
                </Form.Item>
            </Form>
        </div>
    )

}

export default Login