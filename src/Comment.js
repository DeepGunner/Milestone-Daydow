import React, { Component } from 'react';
import style from './style';
import marked from 'marked';

class Comment extends Component {
  
    redirect(){

    }
  render() {
    return (
    <div style={ style.comment }>
        {/* <h3>{this.props.sku}</h3> */}
        <h3>{this.props.comment.name}</h3><br/>
        <img style={style.image} src = {this.props.comment.preview.small}/>
        <h4>{"₹ " + this.props.comment.price}</h4>
        <button style={ style.btn } >Buy</button>
        {/* <span dangerouslySetInnerHTML={ this.rawMarkup() } /> */}
    </div>
    )
  }
}

export default Comment;
