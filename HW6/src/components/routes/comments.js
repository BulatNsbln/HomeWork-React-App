import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Comment from '../comment'
import { loadComments } from '../../ac'
import { selectedCommentsList } from '../../selectors'

class CommentsPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <div>
          <div>
            <NavLink to="/comments/5&0" activeStyle={{ color: 'red' }}>
              1
            </NavLink>
          </div>
          <div>
            <NavLink to="/comments/5&5" activeStyle={{ color: 'red' }}>
              2
            </NavLink>
          </div>
          <div>
            <NavLink to="/comments/5&10" activeStyle={{ color: 'red' }}>
              3
            </NavLink>
          </div>
          <div>
            <NavLink to="/comments/5&15" activeStyle={{ color: 'red' }}>
              4
            </NavLink>
          </div>
        </div>
        <Route path="/comments/:limit&:offset" render={this.getArticle} exact />
      </div>
    )
  }



  getArticle = ({ match }) => {
    console.log('----', match.params, 11111111111)
    match.params.offset !== this.offset ? this.props.loadComments(match.params.limit, match.params.offset) : null;
    this.offset = match.params.offset


    return (this.props.commentsList.map((id) => (
      <li key={id}>
        <Comment id={id} />
      </li>
    )))

  }
}

const mapStateToProps = (state) => ({
  commentsList: selectedCommentsList(state)
})

export default connect(mapStateToProps, { loadComments })(CommentsPage)
