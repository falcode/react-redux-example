import './index.css';
import App from './App';
import React from 'react';
import store from './store'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import * as serviceWorker from './serviceWorker';

// const todoChangeHandler = (val) => store.dispatch(updateCurrent(val));


ReactDOM.render(
    <Provider store={store}>
        <App />     
    </Provider>,
document.getElementById('root')
);


serviceWorker.register();
