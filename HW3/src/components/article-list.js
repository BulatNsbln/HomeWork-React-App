import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  render() {
    return <ul>{this.body}</ul>
  }

  getSelectedArticles(articles, selected) {
    let arr = [];
      for(let i = 0; i < articles.length; i++) {
        for(let j = 0; j < selected.length; j++) {
          if(articles[i].id === selected[j].value) {
            arr.push(articles[i]);
          }
        }
      }
    return arr;
  }

  getFilteredArticles(articles, from, to) {
    let arr2 = [];
      for(let i = 0; i < articles.length; i++) {
        if(from <= Date.parse(articles[i].date) && Date.parse(articles[i].date) <= to || from >= Date.parse(articles[i].date) && Date.parse(articles[i].date) >= to) {
          console.log("fjgksd")
          arr2.push(articles[i])
        }
      }
      return arr2;
  }

  get body() {
    let { toggleOpenItem, openItemId, articles, selected, from, to } = this.props
    
    if(selected) { articles = this.getSelectedArticles(articles, selected)}

    if(from && to) {articles = this.getFilteredArticles(articles, from, to)}

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

const mapStateToProps = ({articles, selected, from, to}) => ({articles, selected, from, to})

export default connect(mapStateToProps)(ArticleListWithAccordion)
