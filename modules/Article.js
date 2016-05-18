import React from 'react'

export default React.createClass({
  getDefaultProps(){
    return{
      author_name: "Sasquatch",
      author_img: "../images/sassy.jpg",
      text: "Sasquatches are the best! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "May 18th"
    }
  },

  render() {
    return (
        <article class="main__article">
          <div className="op__detail--wrapper">
           <img className="op__avatar" src="../images/sassy.jpg"/>
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
})
