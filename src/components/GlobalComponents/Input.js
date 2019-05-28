import React from 'react';
import { Form, Input } from 'antd';

export const InputCustom = ( {field, ...props} ) => (
    <Form.Item>
      <Input
          {...props}
          {...field}
      />
    </Form.Item>
);