import React from 'react'
import {reduxForm, Field} from 'redux-form'

import Input from '../../../Form/Input/Input'
import {email, required} from '../../../../utils/validators/validators'
import classes from './LoginForm.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="">
            <div>
                <div className={classes.error}>{props.error}</div>
                <div className={classes.containerField}>
                    <Field styles={classes.text} name="email" label="Email" validate={[email]} component={Input}/>
                </div>
                <div className={classes.containerField}>
                    <Field styles={classes.text} name="password" label="Password" type="password" validate={[required]}
                           component={Input}/>
                </div>
                <div className={classes.containerField}>
                    <label htmlFor="rememberMe">Запомнить меня: </label>
                    <Field id="rememberMe" name="rememberMe" type="checkbox" component={Input}/>
                </div>
                {props.captcha &&
                    <div className={classes.containerField}>
                        <img src={props.captcha} alt=""/> <br/>
                        <Field styles={classes.text} name="captcha" label="CAPTCHA" component={Input}/>
                    </div>
                }
                <div className={classes.containerField}>
                    <button className={classes.action}>Войти</button>
                </div>

            </div>
        </form>
    )
}

export default reduxForm({form: 'loginForm'})(LoginForm)