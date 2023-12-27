import React from 'react'

import classes from './Post.module.css'


const Post = (props) => {
    return (
        <div className={classes.container}>
            <div>{props.text}</div>
            <small><span>{props.date}</span></small> | <small>Мне нравиться: {props.like}</small>
            <hr/>
        </div>
    )
}


export default Post;