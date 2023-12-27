import React from 'react'
import {Field, reduxForm} from 'redux-form'

import Input from '../../../../Form/Input/Input'
import Textarea from '../../../../Form/Textarea/Textarea'
import {required, url} from '../../../../../utils/validators/validators'
import classes from './PersonalInformation.module.css'


const PersonalInformationForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} action="">
                <div className={classes.error}>{props.error}</div>
                <div className={classes.containerFormElement}>
                    <Field name="fullName" label="Полное имя"
                           validate={[required]} component={Input}
                           styles={classes.input}
                    />
                </div>
                <div className={classes.containerFormElement}>
                    <div><b>Обо мне: </b></div>
                    <Field name="aboutMe" label="Описание поиска работы"
                           data={{rows: 3}} validate={[required]} component={Textarea}
                           styles={classes.textarea}
                    />
                </div>
                <div className={classes.containerFormElement}>
                    <label htmlFor="lookingForAJob"><b> Ищу работу:</b> </label>
                    <Field id="lookingForAJob" name="lookingForAJob" type="checkbox" component={Input}/>
                </div>
                <div className={classes.containerFormElement}>
                    <div><b>Информация о поиске работы: </b></div>
                    <Field name="lookingForAJobDescription" label="Описание поиска работы"
                           data={{rows: 3}} validate={[required]} component={Textarea}
                           styles={classes.textarea}
                    />
                </div>
                <div>
                    <b>Контакты:</b>
                    <ul>
                        {
                            Object.keys(props.initialValues.contacts).map(
                                key => {
                                    return (
                                        <li key={key}>
                                            <Field name={'contacts.' + key} label={key}
                                                   validate={[url]} component={Input}
                                                   styles={classes.input}
                                            />
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>
                <button className={classes.action} type='submit'>Сохранить</button>
            </form>
        </div>
    )
}

export default reduxForm({form: 'profileForm',})(PersonalInformationForm)