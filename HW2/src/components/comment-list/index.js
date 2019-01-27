import React, { Component } from 'react'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import PropTypes from 'prop-types'

import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'

export class CommentList extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    comments: PropTypes.array,
    toggleOpen: PropTypes.func.isRequired
  }
  
  static defaultProps = {
    comments: []
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className='test__comment--btn' >{text}</button>
        <CSSTransition
          transitionName="commentList"
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={300}
        >
          {this.getBody()}
        </CSSTransition>  
      </div>
    )
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }
  
  getBody() {
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body = comments.length ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="test__comment-list--item">
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )

    return <div>{body}</div>
  }
}

const CommentListWithDecorator = toggleOpen(CommentList);
export default CommentListWithDecorator;
