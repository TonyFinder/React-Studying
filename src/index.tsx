import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './Redux/State';


let rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} addPost={store.addPost.bind(store)} onChangeCallback={store.onChangeCallback.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(rerender)
rerender()
