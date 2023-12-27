import axios from 'axios'

let instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': ''},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})


export const authSamuraiAPI = {
    getMe: () => {
        return instance.get('auth/me').then(response => response.data)
    },
    login: (email, password, rememberMe, captcha = null) => {
        return instance.post('auth/login', {email, password, rememberMe, captcha}).then(response => response.data)
    },

    logout: () => {
        return instance.delete('auth/login').then(response => response.data)
    }
}

export const securitySamuraiAPI = {
    getCaptcha: () => {
        return instance.get('security/get-captcha-url/').then(response => response.data)
    },
}

export const usersSamuraiAPI = {
    getUsers: (countItems = 10, page = 1) => {
        return instance.get(`users/?count=${countItems}&page=${page}`).then(response => response.data)
    },
}

export const profileSamuraiAPI = {
    getProfile: (id) => {
        return instance.get(`profile/${id}/`).then(response => response.data)
    },
    changeProfile: (data) => {
        return instance.put('profile/', data).then(response => response.data)
    },
    changeImage: (imageData) => {
        return instance.put('profile/photo', imageData, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(response => response.data)
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}/`).then(response => response.data)
    },
    updateStatus: (status) => {
        return instance.put('profile/status/', {'status': status}).then(response => response.data)
    },
}

export const followSamuraiAPI = {
    followUser: (id) => {
        return instance.post(`follow/${id}`).then(response => response.data)
    },

    unfollowUser: (id) => {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
}
