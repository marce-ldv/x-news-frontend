import React from 'react';
import { Form, Input } from 'antd/lib/index';
import './styles.scss';

export const InputCustom = ({field, ...props} ) => (
    <Form.Item>
      <Input
          {...props}
          {...field}
          className="field-input"
      />
    </Form.Item>
);