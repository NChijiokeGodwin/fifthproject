import React from 'react';
import { Form, Input, Button } from 'antd';


class CustomForm extends React.Component {
  
  formRef = React.createRef();
    constructor(props) {
       super(props);
       this.state = { title: "", content: "" };
    }    
  
    handleSubmit = (event) => {
      event.preventDefault();
      alert('Success')
    }

    handleChange = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
      console.log(nam, val)
    }
  
    render() {
      return(
          <div>
            <Form ref={this.formRef} onSubmit={ this.handleSubmit }>
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
  }

  export default CustomForm;