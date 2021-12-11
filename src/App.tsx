import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import {SitebarPropsType} from './Redux/sitebar_reducer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Profile from './components/Profile/Profile';
import {UsersContainer} from './components/Users/UsersContainer';

type AppProps = {
    sitebar: SitebarPropsType
}

const App = (props: AppProps) => {
    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sitebar={props.sitebar}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <DialogsContainer />}/>
                    <Route path="/profile"
                           render={() => <Profile />}/>
                    <Route path="/users"
                           render={() => <UsersContainer />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;