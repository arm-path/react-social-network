import {usersSamuraiAPI} from '../api/samuraiAPI'
import {followSamuraiAPI} from '../api/samuraiAPI'

const SET_USERS = 'USER_SET_USERS'
const SET_FOLLOWED = 'USER_SET_FOLLOW'
const SET_PAGE = 'USER_SET_PAGE'
const SET_LOADER = 'USER_SET_LOADER'
const ADD_FOLLOWING_PROGRESS = 'USER_ADD_FOLLOWING_PROGRESS'


const initialState = {
    users: [],
    NumberOfUsersOnPage: 6,
    totalCount: 0,
    totalPages: 0,
    page: 1,
    isLoader: true,
    followingProgress: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
                totalCount: action.totalCount,
                totalPages: Math.ceil(action.totalCount / state.NumberOfUsersOnPage)
            }
        case SET_PAGE:
            return {...state, page: action.page}
        case SET_LOADER:
            return {...state, isLoader: action.isLoader}
        case SET_FOLLOWED:
            return {
                ...state,
                users: state.users.map((el) => {
                    if (el.id === action.userId) return {...el, followed: action.followed}
                    return el
                })
            }
        case ADD_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isProgress
                    ? [...state.followingProgress, action.id]
                    : state.followingProgress.filter(el => el !== action.id)
            }
        default:
            return state
    }
}

// actions
export const setUsers = (users, totalCount) => ({type: SET_USERS, users, totalCount})
export const setFollowed = (userId, followed) => ({type: SET_FOLLOWED, userId, followed})
export const setNumberPage = (page) => ({type: SET_PAGE, page})
export const setLoader = (isLoader) => ({type: SET_LOADER, isLoader})
export const changeFollowingProgress = (id, isProgress) => ({type: ADD_FOLLOWING_PROGRESS, id, isProgress})

// thunks
export const getUsers = (count, page) => {
    return async (dispatch) => {
        dispatch(setLoader(true))
        const data = await usersSamuraiAPI.getUsers(count, page)
        dispatch(setLoader(false))
        dispatch(setUsers(data.items, data.totalCount))
    }
}

export const followAndUnfollowUser = (id, followed) => {
    return async (dispatch) => {
        dispatch(changeFollowingProgress(id, true))
        const data = followed ? await followSamuraiAPI.followUser(id) : await followSamuraiAPI.unfollowUser(id)
        if (data.resultCode === 0) dispatch(setFollowed(id, followed))
        dispatch(changeFollowingProgress(id, false))
    }
}

export default userReducer