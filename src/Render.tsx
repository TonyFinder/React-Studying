import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, onChangeCallback, statePropsType} from './Redux/State';

export const rerender = (state: statePropsType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} onChangeCallback={onChangeCallback}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}