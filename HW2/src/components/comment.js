import React from 'react'
import PropTypes from 'prop-types'

function Comment({ comment }) {
  return (
    <div className='test__comment--body'>
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Comment
