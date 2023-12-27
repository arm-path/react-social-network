import {connect} from 'react-redux'
import {compose} from 'redux'

import Dialogs from './Dialogs'
import {getDialogs, getMessages, getTextNewMessage} from '../../../selectors/dialogSelector'
import {writeMessage} from '../../../redux/dialogReducer'
import withAuthRedirect from '../../../hoc/withAuthRedirect'


const mapStateToProps = (state) => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state),
        textNewMessage: getTextNewMessage(state)
    }
}

export default compose(connect(mapStateToProps, {writeMessage}), withAuthRedirect)(Dialogs)