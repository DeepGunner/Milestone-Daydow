import React, { Component } from 'react';
import Comment from './Comment';
import style from './style';

class CommentList extends Component {
  render() {
    let commentNodes = this.props.data.map(comment => {
      return (
        <Comment comment = {comment} key = {comment.sku}>
          {/* { comment.name} */}
        </Comment>
      )
    })

    console.log(commentNodes)
    return (
      <div style={ style.commentList }>
        { commentNodes }
      </div>
    )
  }
}

export default CommentList;
