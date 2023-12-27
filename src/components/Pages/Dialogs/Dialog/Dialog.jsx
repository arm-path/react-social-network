import React from 'react'
import {NavLink} from 'react-router-dom'

import classes from './Dialog.module.css'


const Dialog = (props) => {
    let urlTo = `/dialogs/${props.id}`
    return (
        <div className={classes.container}>
            <NavLink className={({isActive}) => isActive ? classes.active : classes.link} to={urlTo}>
                <div>{props.username}</div>
            </NavLink>
            <hr/>
        </div>
    )
}

export default Dialog