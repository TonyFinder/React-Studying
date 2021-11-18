import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, onChangeCallback, state, subscribe} from './Redux/State';

let rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} onChangeCallback={onChangeCallback}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender()
subscribe(rerender)