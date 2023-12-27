import {getMe} from './authReducer'

const SET_INITIALIZATION_DATA = 'SET_INITIALIZATION_DATA'


const initialState = {
    isInitialization: false
}


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZATION_DATA:
            return {
                ...state,
                isInitialization: true
            }

        default:
            return state
    }
}


export const setInitializationActionCreator = () => ({type: SET_INITIALIZATION_DATA})

export const setInitialization = () => (dispatch) => {
    const me = dispatch(getMe())
    Promise.all([me]).then((values) => {
            dispatch(setInitializationActionCreator())
        }
    )
}

export default appReducer