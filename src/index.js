import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import initialState from './store/actionsCreators.ts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const OPEN_WATCHLIST = 'OPEN_WATCHLIST';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_WATCHLIST: return {
            ...state,
            isOpen: !state.isOpen
        }

        default: return state
    }
}

const openDrawer = () => {
    return {
        type: OPEN_WATCHLIST,
        info: 'opens watch list drawer'
    }
}

const store = createStore(reducer);
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()));
store.dispatch(openDrawer());
store.dispatch(openDrawer());
store.dispatch(openDrawer());
unsubscribe();
