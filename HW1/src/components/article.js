import React, { PureComponent } from 'react'
import CommentList from './comment-list'
import accordion from '../decorators/accordion'

class Article extends PureComponent {
  render() {
    console.log('---', 'rendering')
    const { article, handleBtnClick, isOpen } = this.props
    return (
      <div>
        <div>
          <h3 ref={this.setTitleRef}>{article.title}</h3>
          <button onClick={handleBtnClick}>{isOpen ? 'close' : 'open'}</button>
        </div>
        {isOpen && <section>{article.text}</section>}
        {isOpen && <CommentList comments={article.comments} />}
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)
}

const ArticleListWithAccordion = accordion(Article)

export default ArticleListWithAccordion
