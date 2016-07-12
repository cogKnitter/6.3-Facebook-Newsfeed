import React from 'react'

export default React.createClass({
  componentWillMount(){
    this.setState({ liked: false});
  },
  onHandleClickLike(e){
    this.setState({ liked: this.state.liked ? false : true})
    e.preventDefault();
  },
  render() {
    return (
      <div>
          <h2 className={this.state.liked ? "like__article--clicked" : "like__article"} onClick={this.onHandleClickLike}> Like</h2>
          <h2 className="comment__article"> Comment</h2>

      </div>
    )
  }
})
