import React from 'react'

import Information from './Information/Information'
import Posts from './Posts/Posts'
import Loader from '../../Base/Loader/Loader'
import classes from './Profile.module.css'


const Profile = (props) => {
    return (
        <div className={classes.container}>
            {props.profile.userId
                ? <Information profile={props.profile}
                               changeProfile={props.changeProfile}
                               changeImage={props.changeImage}
                               profileUrlId={props.params.id}
                               profileStatus={props.profileStatus}
                               getStatus={props.getStatus}
                               updateStatus={props.updateStatus}

                />
                : <Loader/>}
            {!props.params.id && <Posts posts={props.posts} createPost={props.createPost}/>}
        </div>)
}

export default Profile