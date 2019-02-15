import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'
import { connect } from 'react-redux'
import { loadComments } from '../../ac/index'
import Loader from '../common/loader'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  shouldComponentUpdate(nextProps) {
    const { isOpen, article, loadComments, loading, commentsList } = nextProps
    this.load = commentsList.get(article.id);
    if(isOpen && !this.load) loadComments(article.id)
    if(this.load || loading) return true
  }
  render() {
    const { isOpen, toggleOpen } = this.props;
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test__comment-list--btn">
          {text}
        </button>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const {
      article: { comments = [], id },
      isOpen,
      loading,
    } = this.props

    if (!isOpen) return null;
    if(loading) return <Loader />

    return (
      <div className="test__comment-list--body">
        {comments.length ? (
          this.comments
        ) : (
          <h3 className="test__comment-list--empty">No comments yet</h3>
        )}
        <CommentForm articleId={id} />
      </div>
    )
  }

  get comments() {
    const arId = this.props.article.id;
    return (
      <ul>
        {this.props.article.comments.map((id) => (
          <li key={id} className="test__comment-list--item">
            <Comment id={id} arId={arId}/>
          </li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    loading: state.comments.loading,
    commentsList: state.comments.entities
  }
}

const CommentListWithToggleOpen = toggleOpen(CommentList);

export default connect(mapStateToProps, {loadComments})(CommentListWithToggleOpen);
