import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { reducer } from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// const store = createStore(reducer, {}, (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
// (window as any).__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(reducer, { }, applyMiddleware(logger, thunk))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
