import React from 'react'
import {reduxForm, Field} from 'redux-form'

import Textarea from '../../../Form/Textarea/Textarea'
import {required, maxLengthCreator} from '../../../../utils/validators/validators'
import classes from './CreateMessageForm.module.css'


const maxLength60 = maxLengthCreator(60)

const CreateMessageForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit} className={classes.container}>
            <div>
                <Field name="textNewMessage" validate={[required, maxLength60]}
                       data={{rows: "3"}} component={Textarea}
                       styles={classes.text}
                />
            </div>
            <button className={classes.sent}>Отправить</button>
        </form>
    )
}

export default reduxForm({form: 'messageForm'})(CreateMessageForm)
