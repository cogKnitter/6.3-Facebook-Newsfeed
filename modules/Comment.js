import React from 'react'
import Article from './Article'
import Comments from './Comments'


export default React.createClass({
  render() {
    console.log(...this.props.comment.text)
    return (
      <div>


      </div>
    )
  }
});
