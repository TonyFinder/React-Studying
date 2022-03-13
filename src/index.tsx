import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './Redux/redux-store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

let rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App sitebar={store.getState().sitebar}/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender()
