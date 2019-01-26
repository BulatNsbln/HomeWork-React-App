import React from 'react'

function Comment(props) {
  const { comment } = props
  return (
    <div>
      <section>{comment.text}</section>
      <h3>{comment.user}</h3>
    </div>
  )
}

export default Comment
