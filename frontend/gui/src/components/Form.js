import React, { Component} from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

class CustomForm extends Component {
    
    constructor (props)

    handleFormSubmit =  async (event, requestType, articleID) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;    
        
        switch ( requestType ) {
            case 'post':
                try {
                    const res = await axios.post('http://127.0.0.1:8000/api/', {
                        title: title,
                        content: content
                    });
                    return console.log(res);
                }
                catch (error) {
                    return console.err(error);
                }
            case 'put':
                try {
                    const res_1 = await axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                        title: title,
                        content: content
                    });
                    return console.log(res_1);
                }
                catch (error_1) {
                    return console.err(error_1);
                }
        }
    }

    render() {
        return (
            <div>
            <Form  onSubmit={
                (event) => this.handleFormSubmit(
                    event, 
                    this.props.requestType,
                    this.props.articleID
                )} >
                <Form.Item label="Title">
                <Input name="title" placeholder="Put a title here" />
                </Form.Item>
                <Form.Item label="Content">
                <Input name="content" placeholder="Type in some content" />
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