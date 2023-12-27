import React from 'react'

import Contacts from './Contacts/Contacts'

const PersonalInformationView = ({fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts}) => {
    return (
        <div>
            <p><b>ФИО:</b> {fullName}</p>
            <p><b>Обо мне: </b> {aboutMe} </p>
            <p><b>Поиск работы:</b> {lookingForAJob ? 'Ищу работу' : 'Не ищу работу'} </p>
            <p><b>Информация о поиске работы:</b> {lookingForAJobDescription} </p>
            <Contacts contacts={contacts}/>
        </div>
    )
}


export default PersonalInformationView