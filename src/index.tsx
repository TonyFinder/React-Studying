import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './Redux/redux-store';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

let rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <Provider store={store}>
                    <App sitebar={store.getState().sitebar}/>
                </Provider>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender()
