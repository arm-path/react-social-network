import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Provider, connect} from 'react-redux'

import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Login from './components/Pages/Login/Login'
import DialogsContainer from './components/Pages/Dialogs/DialogsContainer'
import UsersContainer from './components/Pages/Users/UsersContainer'
import ProfileContainer from './components/Pages/Profile/ProfileContainer'
import {setInitialization} from "./redux/appReducer";
import Loader from "./components/Base/Loader/Loader";



class App extends React.Component {
    componentDidMount() {
        this.props.setInitialization()
    }

    render() {
        if (!this.props.isInitialization) return < Loader />
        return (
            <BrowserRouter>
                <Provider store={this.props.store}>
                    <div className="container">
                        <Header/>
                        <Navigation/>
                        <Routes>
                            <Route path='/profile/:id' element={<ProfileContainer/>}/>
                            <Route path='/profile' element={<ProfileContainer/>}/>
                            <Route path='/dialogs' element={<DialogsContainer/>}/>
                            <Route path='/dialogs/:number' element={<DialogsContainer/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </div>
                </Provider>
            </BrowserRouter>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isInitialization: state.app.isInitialization
    }
}

export default connect(mapStateToProps, {setInitialization})(App);