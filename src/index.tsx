import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './Redux/redux-store';
import {Provider} from 'react-redux';


let rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App sitebar={store.getState().sitebar}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(rerender)
rerender()
