import React from 'react'
import Article from './Article'
import Comment from './Comment'

export default React.createClass({
  getDefaultProps() {
    return{
      comments: [
        {
          author_name: "Abominable Snowman",
          author_img: "../images/abby.jpg",
          text: "Yetis are better",
          date: "1 hour ago"
        },
        {
          author_name: "Owl",
          author_img: "../images/owl.jpg",
          text: "Whoooo",
          date: "45 minutes ago"
        },
        {
          author_name:"Creepy Gnome",
          author_img: "../images/gnome.jpg",
          text:"Huh?",
          date: "30 minutes ago"
        }
      ]
    }
  },


  render() {
    return (
          <div>
            {this.props.comments.map(function(comment, i) {
             return <Comment key={i} author_name={comment.author_name} text={comment.text} author_img={comment.author_img} date={comment.date}/>;
            })}
           </div>
    )
  }
})
