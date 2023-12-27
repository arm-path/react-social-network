import React from 'react'
import {NavLink} from 'react-router-dom'

import classes from './Navigation.module.css'


const Navigation = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.containerLink}>
                <NavLink className={({isActive}) => (isActive ? classes.active : classes.link)}
                         to="/profile">Профиль</NavLink>
            </div>
            <div className={classes.containerLink}>
                <NavLink className={({isActive}) => (isActive ? classes.active : classes.link)}
                         to="/dialogs">Диалоги</NavLink>
            </div>
            <div className={classes.containerLink}>
                <NavLink className={({isActive}) => (isActive ? classes.active : classes.link)}
                         to="/users">Пользователи</NavLink>
            </div>

        </div>
    )
}

export default Navigation;