import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {HashRouter, Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import {ActionDialogPropsType, DialogsPagePropsType} from './Redux/dialogs_reducer';
import {ActionProfilePropsType, ProfilePagePropsType} from './Redux/profile_reducer';
import {ActionSitebarPropsType, SitebarPropsType} from './Redux/sitebar_reducer';

type AppProps = {
    dialogsPage: DialogsPagePropsType
    profilePage: ProfilePagePropsType
    sitebar: SitebarPropsType[]
    dispatch: (action: ActionDialogPropsType | ActionProfilePropsType | ActionSitebarPropsType) => void
}

const App = (props: AppProps) => {
    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sitebar={props.sitebar}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <Dialogs dialogs={props.dialogsPage} dispatch={props.dispatch}/>}/>
                    <Route path="/profile"
                           render={() => <Profile profilePage={props.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;