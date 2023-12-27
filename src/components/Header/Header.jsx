import React from 'react'
import {connect} from 'react-redux'

import {NavLink} from 'react-router-dom'
import {getAuthUser} from '../../selectors/authSelector'
import {logout} from '../../redux/authReducer'
import logo from '../../images/react.svg'
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.logo}><img src={logo} alt="logo"/></div>
                <div className={classes.title}>Social Network</div>
                <div className={classes.user}>
                    {props.auth.login
                        ? <span>{props.auth.login} | <span onClick={props.logout} className={classes.exit}>
                            Выход
                        </span></span>
                        : <NavLink to="/login">Вход</NavLink>}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: getAuthUser(state)
    }
}

export default connect(mapStateToProps, {logout})(Header)