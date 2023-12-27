import React from 'react'

import Post from './Post/Post'
import CreatePostForm from './CreatePostForm/CreatePostForm'
import classes from './Posts.module.css'


const Posts = React.memo((props) => {

        const sendData = (data) => {
            props.createPost(data.textNewPost)
        }

        return (
            <div className={classes.container}>
                <h3>Список постов</h3>
                <CreatePostForm onSubmit={sendData} textNewPost={props.textNewPost}/>
                {props.posts.map(el => <Post key={el.id} id={el.id} text={el.text} date={el.date} like={el.like}/>)}
            </div>
        )
    }
)


export default Posts