export const getAuthUser = (state) => {
    return {...state.auth.user}
}

export const getAuthUserId = (state) => {
    return state.auth.user.id
}

export const getAuthUserIsAuth = (state) => {
    return state.auth.user.isAuth
}

export const getCaptchaUrl = (state) => {
    return state.auth.user.captcha
}