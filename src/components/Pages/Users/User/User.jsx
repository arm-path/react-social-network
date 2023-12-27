import React from 'react'

import {NavLink} from 'react-router-dom'
import classes from './User.module.css'


const User = ({id, name, image, status, followed, followAndUnfollowUser, followingProgress}) => {
    let followedAction = () => {
        followAndUnfollowUser(id, true)
    }
    let unfollowedAction = () => {
        followAndUnfollowUser(id, false)
    }
    return (
        <div className={classes.container}>
            <div className={classes.imageAndAction}>
                <NavLink to={`/profile/${id}`}>
                    <img alt={name} className={classes.image} src={image}/>
                </NavLink>
                <div>
                    {followed ?
                        <button disabled={followingProgress.some(el => el === id)}
                                className={classes.button} onClick={unfollowedAction}>Удалить</button> :
                        <button disabled={followingProgress.some(el => el === id)}
                                className={classes.button} onClick={followedAction}>Добавить</button>}
                </div>
            </div>
            <div className={classes.information}>
                <div><b>{name}</b></div>
                <div><i>{status}</i></div>
            </div>
            <div className={classes.byBirth}></div>
        </div>
    )
}

export default User