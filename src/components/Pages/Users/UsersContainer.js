import React from 'react'
import {connect} from 'react-redux'

import Users from './Users'
import {getUsers, followAndUnfollowUser, setNumberPage} from '../../../redux/userReducer'
import {
    getFollowingProgress,
    getIsLoader,
    getNumberOfUsersOnPage,
    getPage,
    getTotalPages,
    getUser
} from '../../../selectors/userSelectors'


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.NumberOfUsersOnPage, this.props.page)
    }

    changePage = (page) => {
        this.props.setNumberPage(page)
        this.props.getUsers(this.props.NumberOfUsersOnPage, page)
    }

    render() {
        return <Users users={this.props.users}
                      page={this.props.page}
                      totalPages={this.props.totalPages}
                      changePage={this.changePage}
                      followAndUnfollowUser={this.props.followAndUnfollowUser}
                      isLoader={this.props.isLoader}
                      followingProgress={this.props.followingProgress}
        />
    }

}

const mapStateToProps = (state) => {
    return {
        users: getUser(state),
        NumberOfUsersOnPage: getNumberOfUsersOnPage(state),
        totalPages: getTotalPages(state),
        page: getPage(state),
        isLoader: getIsLoader(state),
        followingProgress: getFollowingProgress(state)
    }
}

export default connect(mapStateToProps,
    {followAndUnfollowUser, setNumberPage, getUsers})(UsersContainer)