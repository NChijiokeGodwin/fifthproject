import React, { Component }  from 'react';
import Axios from 'axios';

import { Card } from 'antd';

import CustomForm from '../components/Form';


class ArticleDetail extends Component {

    state = {
        article: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        Axios.get(`http://127.0.0.1:8000/api/${articleID}`)
        .then(res => {
            this.setState({
                article: res.data
            })
        })
    }

    render() {
      return (
          <div>
            <Card title={this.state.article.title} >
                <p>{this.state.article.content}</p>
            </Card>
            <CustomForm
                requestType="post"
                articleID={this.props.match.params.articleID} />
          </div> 
      )}}


export default ArticleDetail;