import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

class CustomForm extends React.Component {
    formRef = React.createRef();

    handleFormSubmit = (event, requestType, articleID) => {
        const title = this.state.title;
        const content = this.state.content;    
        
        switch ( requestType ) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
        }
        this.formRef.current.resetFields();
    }

    
    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(nam, val)
    }


    render() {
        return (
            <div>
            <Form  onFinish={
                (event) => this.handleFormSubmit(
                    event, 
                    this.props.requestType,
                    this.props.articleID
                )} 
                ref={this.formRef}>
                <Form.Item label="Title">
                <Input name="title" placeholder="Put a title here" onChange={this.handleChange} />
                </Form.Item>
                <Form.Item label="Content">
                <Input name="content" placeholder="Type in some content" onChange={this.handleChange} />
                </Form.Item>
                <Form.Item >
                <Button type="primary" htmlType="submit" >{this.props.btnText}</Button>
                </Form.Item>
            </Form>
            </div>
        );
    }
};

export default CustomForm;