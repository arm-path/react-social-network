import React from 'react'
import {reduxForm, Field} from 'redux-form'

import Textarea from '../../../../Form/Textarea/Textarea'
import {required, minLengthCreator, maxLengthCreator} from '../../../../../utils/validators/validators'
import classes from './CreatePostForm.module.css'


const minLength3 = minLengthCreator(3)
const maxLength150 = maxLengthCreator(150)

const CreatePostForm = React.memo((props) => {
    return (
        <form onSubmit={props.handleSubmit} action="" className={classes.container}>
            <Field name="textNewPost" component={Textarea}
                   validate={[required, minLength3, maxLength150]}
                   styles={classes.text}
                   data={{'cols': "100", 'rows': "3", 'placeholder': 'Напишите пост...'}}/>
            <div>
                <button className={classes.actionCreate}>Добавить</button>
            </div>
        </form>
    )
})

export default reduxForm({form: 'postForm'})(CreatePostForm)