import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Reducer from "./Store/Reducer/body";
import createSagaMiddleware from 'redux-saga';
import { bodyHome } from "./Store/Saga/index";


const sagaMiddleware = createSagaMiddleware();

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    bodyHome:Reducer
});
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(bodyHome);

const app = (
    <Provider store={ store } >
        <App />
    </Provider>
);
ReactDOM.render(
    app,
  document.getElementById('root')
);
