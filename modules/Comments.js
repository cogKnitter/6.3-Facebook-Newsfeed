import React from 'react'

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
          text: "",
          date: "45 minutes ago"
        },
        {
          author_name:"Creepy Gnome",
          author_img: "../images/gnome.jpg",
          text:"",
          date: "30 minutes ago"
        }
      ]
    }

  },
  render() {
    return (
        <article class="">
          <div>
          {this.props.comments.map(function(comment, i){
           return <Comment key={i} author_name={comment.author_name} text={comment.text}/>
         })}
         </div>
        </article>
    )
  }
})
