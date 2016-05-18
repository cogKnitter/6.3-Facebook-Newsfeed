import React from 'react'

export default React.createClass({
  getDefaultProps(){
    return{
      author_name: "Sasquatch",
      author_img: "../images/sassy.jpg",
      text: "Sasquatches are the best",
      date: "May 18th"
    }
  },

  render() {
    return (
        <article class="main__article">
          <div>
           <img src="../images/sassy.jpg"/>
           <h2>{this.props.author_name}</h2>
           <h3>{this.props.date}</h3>
          </div>
          <div>
            <p>
              {this.props.text}
            </p>
          </div>
        </article>
    )
  }
})
