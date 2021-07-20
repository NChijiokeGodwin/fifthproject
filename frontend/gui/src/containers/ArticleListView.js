import React, { Component }  from 'react';
import Axios from 'axios';

import Articles from '../components/Article';


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
          <Articles  data={this.state.articles} />
      )}}


export default ArticleList;