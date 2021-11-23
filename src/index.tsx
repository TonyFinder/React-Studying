import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './Redux/redux-store';


let rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App sitebar={store.getState().sitebar} dialogsPage={store.getState().dialogsPage} profilePage={store.getState().profilePage} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(rerender)
rerender()
