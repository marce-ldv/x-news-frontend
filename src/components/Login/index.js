import React from 'react'
import 'antd/dist/antd.css';
import { Formik, Field, FieldArray } from 'formik';
import { Form, Icon } from 'antd';
import { InputCustom } from '../GlobalComponents/Input';
import { ButtonCustom } from '../GlobalComponents/Button';
import { useLogin } from './hooks';

const Login = () => {

    const [ loginAxios ] = useLogin('user/login');

    const handleSubmit = ( valuesForm ) => {
        console.log( valuesForm )
        loginAxios(valuesForm);
    };

    return(
        <Formik
        onSubmit={( values ) => {
            setTimeout(() => {
                handleSubmit( values );
            }, 500);
        }}
        render={props => (
            <form onSubmit={props.handleSubmit} className="form-login">
                <FieldArray>
                    <Form.Item>
                        <Field
                            type="text"
                            name="username"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Enter your username"
                            component={InputCustom}
                        />
                        <Field
                            type="password"
                            name="password"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Enter your password"
                            component={InputCustom}

                        />
                    </Form.Item>
                </FieldArray>
                {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                <button type="primary" className="button-submit">Submit</button>
            </form>
            )}
        />
    );
};

export default Login