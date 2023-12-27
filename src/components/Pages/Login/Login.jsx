import React from 'react'
import {connect} from 'react-redux'
import {Navigate} from 'react-router-dom'

import LoginForm from './LoginForm/LoginForm'
import {login} from '../../../redux/authReducer'
import classes from './Login.module.css'

import {getAuthUserIsAuth, getCaptchaUrl} from '../../../selectors/authSelector'


const Login = (props) => {

    let sendData = (data) => {
        props.login(data)
    }
    return (
        <div className={classes.container}>
            {props.isAuth
                ? <Navigate to='/profile'/>
                : <div>
                    <h3 className={classes.title}>Страница авторизации</h3>
                    <div className={classes.form}><LoginForm captcha={props.captcha} onSubmit={sendData}/></div>
                </div>
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: getAuthUserIsAuth(state),
        captcha: getCaptchaUrl(state)
    }
}

export default connect(mapStateToProps, {login})(Login)