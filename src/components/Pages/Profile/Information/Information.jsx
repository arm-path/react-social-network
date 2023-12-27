import React from 'react'

import ImageProfile from './ImageProfile/ImageProfile'
import PersonalInformation from './PersonalInformation/PersonalInformation'
import classes from './Information.module.css'


const Information = (props) => {
    return (
        <div className={classes.container}>
            <ImageProfile
                image={props.profile.photos.large}
                changeImage={props.changeImage}
            />
            <PersonalInformation
                profile={props.profile}
                profileStatus={props.profileStatus}
                profileUrlId={props.profileUrlId}
                getStatus={props.getStatus}
                updateStatus={props.updateStatus}
                changeProfile={props.changeProfile}
            />
        </div>
    )
}

export default Information;