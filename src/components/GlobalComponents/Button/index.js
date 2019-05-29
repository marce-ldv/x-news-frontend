import React from 'react';
import {Form, Button} from "antd";
import './styles.scss';

export const ButtonCustom = ({...props}) => {
    return(
        <Form.Item>
            <Button
                {...props}
                className="button-submit"
            />
        </Form.Item>
    );
}