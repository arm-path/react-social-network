import {createSelector} from 'reselect'

export const getUser = (state) => {
    return state.userPage.users
}

export const getUserExampleReselect = createSelector(getUser, (users) => {
    return users.filter(el => true)
})

export const getNumberOfUsersOnPage = (state) => {
    return state.userPage.count
}

export const getTotalPages = (state) => {
    return state.userPage.totalPages
}

export const getPage = (state) => {
    return state.userPage.page
}

export const getIsLoader = (state) => {
    return state.userPage.isLoader
}

export const getFollowingProgress = (state) => {
    return state.userPage.followingProgress
}