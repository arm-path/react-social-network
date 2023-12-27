import {Navigate} from 'react-router-dom'
import {connect} from 'react-redux'



const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.user.isAuth
    }
}

const withAuthRedirect = (Component) => {
    const withAuthComponent = (props) => {

        if (!props.isAuth) {
            return <Navigate to='/login' />
        }
        return <Component {...props} />
    }
    return connect(mapStateToProps, {})(withAuthComponent)
}


export default withAuthRedirect