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
import {ActionPropsType, statePropsType} from './Redux/State';

type AppProps = {
    state: statePropsType
    dispatch: (action: ActionPropsType) => void
}

const App = (props: AppProps) => {
    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sitebar={props.state.sitebar}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogsPage}/>}/>
                    <Route path="/profile"
                           render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;