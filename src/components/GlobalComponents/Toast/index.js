import React from 'react';
import 'antd/dist/antd.css';
import { Button, notification, Icon } from 'antd';

export const Toast = () => {
    notification.open({
        message: 'Title',
        description:
            'This is the content of the notification.',
        icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
    });
};