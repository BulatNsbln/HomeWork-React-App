import React, { Component } from 'react'
import Article from './article'

class ArticleList extends Component {
  render() {
    return <ul>{this.body}</ul>
  }

  get body() {
    const { articles } = this.props
    return articles.map((article) => (
      <li key={article.id}>
        <Article article={article} />
      </li>
    ))
  }
}

export default ArticleList
