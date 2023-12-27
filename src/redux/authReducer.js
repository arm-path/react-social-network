import {stopSubmit} from 'redux-form'

import {authSamuraiAPI, securitySamuraiAPI} from '../api/samuraiAPI'

const FILL_PROFILE = 'AUTH_FILL_PROFILE'
const CLEAN_PROFILE = 'AUTH_CLEAN_PROFILE'
const SET_CAPTCHA = 'AUTH_SET_CAPTCHA'

const initialState = {
    user: {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        captcha: null
    },
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_PROFILE:
            return {
                ...state,
                user: {...action.data}
            }
        case CLEAN_PROFILE:
            return {
                ...state,
                user: {
                    id: null,
                    email: null,
                    login: null,
                    isAuth: false,
                    captcha: null
                },
            }
        case SET_CAPTCHA:
            return {
                ...state,
                user: {
                    ...state.user,
                    captcha: action.captchaUrl
                }
            }
        default:
            return state
    }
}

// actions
export const fillProfile = (data) => ({type: FILL_PROFILE, data})
export const cleanProfile = () => ({type: CLEAN_PROFILE})
export const setCaptcha = (captchaUrl) => ({type: SET_CAPTCHA, captchaUrl})

// thunks
export const getMe = () => {
    return async (dispatch) => {
        const resultData = await authSamuraiAPI.getMe()
        if (resultData.resultCode === 1) dispatch(cleanProfile)
        if (resultData.resultCode === 0) {
            const profile = resultData.data
            dispatch(fillProfile({id: profile.id, email: profile.email, login: profile.login, isAuth: true}))
        }
    }
}

export const getCaptcha = () => {
    return async (dispatch) => {
        const resultData = await securitySamuraiAPI.getCaptcha()
        dispatch(setCaptcha(resultData.url))
    }
}

export const login = (data) => {
    return async (dispatch) => {
        const resultData = await authSamuraiAPI.login(
            data.email, data.password, data.rememberMe, data.captcha && data.captcha)
        if (resultData.resultCode === 0) {
            dispatch(getMe())
        } else {
            if (resultData.resultCode === 10) {
                dispatch(getCaptcha())
            }
            dispatch(stopSubmit('loginForm', {_error: resultData.messages ? resultData.messages[0] : ''}))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        const resultData = await authSamuraiAPI.logout()
        if (resultData.resultCode === 0) dispatch(cleanProfile())
    }
}

export default authReducer