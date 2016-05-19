import React from 'react'



export default React.createClass({
  render() {
    console.log(this.props)
    return (
      <article className="main__article">
        <div className="op__detail--wrapper">
         <img className="op__avatar" src={this.props.author_img}/>
           <h2 className="op__name">{this.props.author_name}</h2>
           <h3 className="op__date">{this.props.date}</h3>
        </div>
        <div className="op__text--wrapper">
          <p className="op__text">
            {this.props.text}
          </p>
        </div>
      </article>
    )
  }
});
