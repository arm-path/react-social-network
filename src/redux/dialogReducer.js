const WRITE_MESSAGE = 'DIALOG_WRITE_MESSAGE'


const initialState = {
    dialogs: [
        {id: 1, username: 'Алиса'},
        {id: 2, username: 'Маруся'},
        {id: 3, username: 'Сири'}
    ],

    messages: [
        {id: 1, u1_id: 1, u2_id: 0, message: 'Привет!', typeMessage: 'inbox'},
        {id: 2, u1_id: 0, u2_id: 1, message: 'Как дела Алиса?', typeMessage: 'sent'},
        {id: 3, u1_id: 2, u2_id: 0, message: 'Нормально, сижу у воображаемого окна!', typeMessage: 'inbox'}
    ],

}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case WRITE_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: state.messages[state.messages.length - 1].id + 1,
                    u1_id: 0,
                    u2_id: parseInt(action.userId),
                    message: action.textNewMessage,
                    typeMessage: 'sent'
                }],
                textNewMessage: ''
            }
        default:
            return state
    }
}


export const writeMessage = (userId, textNewMessage) => ({type: WRITE_MESSAGE, userId, textNewMessage})

export default dialogReducer