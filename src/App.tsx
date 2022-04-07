import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import {SitebarPropsType} from './Redux/sitebar_reducer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import {Route, Routes} from 'react-router-dom';
import {HeaderContainer} from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

type AppProps = {
    sitebar: SitebarPropsType
}

const App = (props: AppProps) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar sitebar={props.sitebar}/>
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

export default App;