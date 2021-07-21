import React, { Component }  from 'react';
import Axios from 'axios';

import Articles from '../components/Article';
import CustomForm from '../components/Form';


class ArticleList extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        Axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            this.setState({
                articles: res.data
            })
        })
    }

    render() {
      return (
          <div>
            <Articles  data={this.state.articles} />
            <br />
            <h2>Create an article</h2>
            <CustomForm 
                requestType="post"
                articleID={null} />
          </div> 
      )}}


export default ArticleList;