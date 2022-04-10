import React, {ComponentType} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainer, {withRouter} from './components/Profile/ProfileContainer';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login/Login';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {connect} from 'react-redux';
import {AppStateType} from './Redux/redux-store';
import {initializeTC} from './Redux/app_reducer';
import {compose} from 'redux';
import {Loading} from './components/common/Loading/Loading';

type MapDispatchToPropsType = {
    initializeTC: () => void
}
type AppPropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeTC()
    }

    render() {
        if (!this.props.initialized) return <Loading/>
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar sitebar={this.props.sitebar}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs"
                               element={<DialogsContainer/>}/>
                        <Route path="/profile/:id"
                               element={<ProfileContainer/>}/>
                        <Route path="/users"
                               element={<UsersContainer/>}/>
                        <Route path="/login"
                               element={<Login/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    sitebar: state.sitebar,
    initialized: state.app.initialized
})

export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeTC})
)(App)
