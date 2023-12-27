import {stopSubmit} from 'redux-form'

import {profileSamuraiAPI} from '../api/samuraiAPI'

const CREATE_POST = 'PROFILE_CREATE_POST'
const SET_PROFILE = 'PROFILE_SET_PROFILE'
const SET_STATUS_PROFILE = 'PROFILE_SET_STATUS_PROFILE'
const SET_IMAGE_PROFILE = 'PROFILE_SET_IMAGE_PROFILE'


const initialState = {
    profile: {},
    profileStatus: '',

    posts: [
        {id: 1, text: 'Lorem ipsum dolor sit amet.', date: '09.11.2023 20:20', like: 15},
        {id: 2, text: 'Lconsectetur adipisicing elit. Delectus, rem?', date: '09.11.2023 21:00', like: 5}
    ],

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profileData
            }
        case SET_IMAGE_PROFILE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }
        case SET_STATUS_PROFILE:
            return {
                ...state,
                profileStatus: action.statusData
            }
        case CREATE_POST:
            let dateString = `
                      ${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} 
                      ${new Date().getHours()}:${new Date().getMinutes()}`

            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts[state.posts.length - 1].id + 1,
                    text: action.textNewPost, date: dateString, like: 0
                }],

            }

        default:
            return state
    }
}

// actions
export const setProfile = (profileData) => ({type: SET_PROFILE, profileData})
export const setStatusProfile = (statusData) => ({type: SET_STATUS_PROFILE, statusData})
export const setImageProfile = (photos) => ({type: SET_IMAGE_PROFILE, photos})
export const createPost = (textNewPost) => ({type: CREATE_POST, textNewPost: textNewPost})

// thunks
export const requestProfile = (id) => {
    return async (dispatch) => {
        const data = await profileSamuraiAPI.getProfile(id)
        dispatch(setProfile(data))
    }
}

export const changeProfile = (profileData) => {
    return async (dispatch, getState) => {
        let response = await profileSamuraiAPI.changeProfile(profileData)
        if (response.resultCode === 0) dispatch(requestProfile(getState().auth.user.id))
        if (response.resultCode === 1)
            dispatch(stopSubmit('profileForm', {_error: 'Данные не были сохранены!'}))
    }
}

export const changeImage = (imageData) => {
    return async (dispatch) => {
        const response = await profileSamuraiAPI.changeImage(imageData)
        if (response.resultCode === 0)
            dispatch(setImageProfile(response.data.photos))
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileSamuraiAPI.getStatus(userId)
        dispatch(setStatusProfile(data))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let data = await profileSamuraiAPI.updateStatus(status)
        if (data.resultCode === 0) dispatch(setStatusProfile(status))
    }
}


export default profileReducer