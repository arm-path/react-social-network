import React from 'react'

import profile from '../../../../../images/react.svg'
import classes from './ImageProfile.module.css'



const ImageProfile = ({image, changeImage}) => {

    const changeImageAction = (e) => {
        if (e.target.files) {
            const formData = new FormData()
            formData.append('image', e.target.files[0])
            changeImage(formData)
        }
    }

    return (
        <div className={classes.container}>
            {image
                ? <img src={image} alt=""/>
                : <img src={profile} alt=""/>}
            <input type='file' onChange={changeImageAction}/>
        </div>
    )
}

export default ImageProfile