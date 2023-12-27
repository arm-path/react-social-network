import profileReducer from './profileReducer'
import dialogReducer from './dialogReducer'


let myStore = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'Lorem ipsum dolor sit amet.', date: '09.11.2023 20:20', like: 15},
                {id: 2, text: 'Lconsectetur adipisicing elit. Delectus, rem?', date: '09.11.2023 21:00', like: 5}
            ],
            textNewPost: ''
        },
        dialogPage: {
            dialogs: [
                {id: 1, username: 'Алиса'},
                {id: 2, username: 'Таня'},
                {id: 3, username: 'Саша'}
            ],
            messages: [
                {id: 1, u1_id: 1, u2_id: 0, message: 'Привет!', typeMessage: 'inbox'},
                {id: 2, u1_id: 0, u2_id: 1, message: 'Как дела Алиса?', typeMessage: 'sent'},
                {id: 3, u1_id: 2, u2_id: 0, message: 'Нормально, сижу у воображаемого окна!', typeMessage: 'inbox'}
            ],
            textNewMessage: ''
        },
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('render Tree')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._callSubscriber(this.getState())
    },
}

export default myStore