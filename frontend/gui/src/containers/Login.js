import React from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;



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

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        
        return (
            <div>{errorMessage}
                {
                this.props.loading ?

                <Spin indicator={antIcon} />

                :

                <Form
                name="normal_login"
                className="login-form"
                onFinish={this.onFinish}
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
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                        Login
                    </Button>
                    Or 
                    <NavLink style={{marginRight: '10px'}} to='/signup/'>
                         Signup
                    </NavLink>
                </Form.Item>

                </Form>
                }
            </div>
          );
    }
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}
export default connect(mapStateToProps)(NormalLoginForm);