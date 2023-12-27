import React, {useState} from 'react'


import Status from './Status/Status'
import PersonalInformationView from './PersonalInformationView'
import PersonalInformationForm from './PersonalInformationForm'
import classes from './PersonalInformation.module.css'


const PersonalInformation = (props) => {

    let [editMode, setEditMode] = useState(false)

    let sendData = (data) => {
        props.changeProfile(data)
        setEditMode(false)
    }

    return (
        <div className={classes.container}>
            <Status status={props.profileStatus}
                    profileUrlId={props.profileUrlId}
                    getStatus={props.getStatus}
                    updateStatus={props.updateStatus}/>
            {!editMode ?
                <div>
                    <PersonalInformationView fullName={props.profile.fullName}
                                             aboutMe={props.profile.aboutMe}
                                             lookingForAJob={props.profile.lookingForAJob}
                                             lookingForAJobDescription={props.profile.lookingForAJobDescription}
                                             contacts={props.profile.contacts}/>
                    <button className={classes.action} onClick={(e) => setEditMode(true)}>
                        Изменить
                    </button>
                </div>
                : <div>
                    <PersonalInformationForm
                        initialValues={props.profile}
                        onSubmit={sendData}
                        contacts={props.contacts}/>
                </div>
            }
        </div>
    )
}

export default PersonalInformation