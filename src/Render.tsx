import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, statePropsType} from './Redux/State';

export const rerender = (state: statePropsType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}