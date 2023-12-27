import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

import profileReducer from './profileReducer'
import dialogReducer from './dialogReducer'
import userReducer from './userReducer'
import authReducer from './authReducer'
import appReducer from './appReducer'


let reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    userPage: userReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.__store__ = store


export default store