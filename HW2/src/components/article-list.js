import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Article from './article'
import accordion from '../decorators/accordion'


export class ArticleList extends Component {
  static propTypes = {
    toggleOpenItem: PropTypes.func.isRequired,
    openItemId: PropTypes.string,
    articles: PropTypes.array
  }

  static defaultProps = {
    articles: []
  }
  
  render() {
    return <ul>{this.body}</ul>
  }

  get body() {
    const { toggleOpenItem, openItemId, articles } = this.props
    return articles.map((article) => (
      <li key={article.id} className="test__article-list--item">
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem}
        />
      </li>
    ))
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }
}

const ArticleListWithAccordion = accordion(ArticleList)

export default ArticleListWithAccordion
