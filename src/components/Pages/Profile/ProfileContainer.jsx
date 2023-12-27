import React, {useEffect} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'

import Profile from './Profile'
import {getAuthUserId} from '../../../selectors/authSelector'
import {getPosts, getProfile, getProfileStatus} from '../../../selectors/profileSelector'
import {
    changeImage,
    changeProfile,
    createPost,
    getStatus,
    requestProfile,
    updateStatus
} from '../../../redux/profileReducer'
import withAuthRedirect from '../../../hoc/withAuthRedirect'
import withRouter from '../../Base/withRouter/withRouter'


const ProfileContainer = (props) => {

    const {params, requestProfile, getStatus, myProfileId} = props

    useEffect(() => {
        if (params.id) {
            requestProfile(params.id)
            getStatus(params.id)
        } else {
            requestProfile(myProfileId)
            getStatus(myProfileId)
        }
    }, [params, requestProfile, getStatus, myProfileId])

    return (<Profile {...props}/>)

}

const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
        profile: getProfile(state),
        profileStatus: getProfileStatus(state),
        myProfileId: getAuthUserId(state)
    }
}


export default compose(connect(mapStateToProps, {
    createPost, requestProfile, getStatus, updateStatus, changeImage, changeProfile
}), withAuthRedirect, withRouter)(ProfileContainer)
