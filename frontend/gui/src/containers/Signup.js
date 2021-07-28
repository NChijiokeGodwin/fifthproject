import React from 'react';
import { Form, Input, Cascader, Button, AutoComplete } from 'antd';
import { UserOutlined, MessageOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';


class RegistrationForm extends React.Component {
  formRef = React.createRef();

  handleFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  render() {
    return (
        <Form
          ref={this.formRef}
          name="register"
          onFinish={this.handleFinish}
          scrollToFirstError
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
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input prefix={<MessageOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
    
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password 
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
            />
          </Form.Item>
    
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
    
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password 
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
            />
          </Form.Item>
    
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      );
  }
  
};

export default RegistrationForm;