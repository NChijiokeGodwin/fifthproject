import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class NormalLoginForm extends React.Component {
    onFinish = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Recieved values of form: ', values)
            }
        });
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form
              name="normal_login"
              className="login-form"
              onFinish={onFinish}
            >

              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              
              <Form.Item>
                
              </Form.Item>

            </Form>
          );
    }
  
};


export default NormalLoginForm;