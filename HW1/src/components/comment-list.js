import React, { Component } from 'react'
import Comment from './comment'
import accordion from '../decorators/accordion'

class CommentList extends Component {
  render() {
    const { handleBtnClick, isOpen } = this.props
    return (
      <div>
        <button onClick={handleBtnClick}>{!isOpen ? 'open' : 'close'}</button>
        {isOpen && <ul>{this.body}</ul>}
      </div>
    )
  }

  get body() {
    const { comments } = this.props
    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }
}

const CommentListWitchDecorator = accordion(CommentList)
export default CommentListWitchDecorator
