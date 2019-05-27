import React from 'react'
import 'antd/dist/antd.css';
import { Formik, Field, FieldArray } from 'formik';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { useLogin } from './hooks';

const Login = () => {

    const [ loginAxios ] = useLogin('user/login');

    const handleSubmit = ( valuesForm ) => {
        console.log( valuesForm )
        loginAxios(valuesForm);
    }

    return(
        <Formik
        onSubmit={( values ) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
                handleSubmit( values );
            }, 1000);
        }}
        render={props => (
            <form onSubmit={props.handleSubmit}>
                <FieldArray>
                    <Form.Item>
                        <Field
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                        />
                        <Field
                            type="password"
                            name="password"
                            placeholder="Enter your password"

                        />
                    </Form.Item>
                    {/* <Form.Item>
                        <Field
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                        />
                    </Form.Item> */}
                    {/* <Form.Item>
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
                    </Form.Item> */}
                </FieldArray>
                {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                <button type="submit">Submit</button>
            </form>
            )}
        />
    );
}

export default Login