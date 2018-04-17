/**
 * Created by dolgov.ivan@gmail.com on 17.04.2018.
 */
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";


const isProduction = process.env["NODE_ENV"] === 'production'
console.log("production", isProduction);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// console.log("persistedState", persistedState);

export const store = isProduction ?
    createStore(appReducer, persistedState, applyMiddleware(thunk, persistenceStorage)) :
    createStore(appReducer, persistedState, composeEnhancers(applyMiddleware(thunk, logger, persistenceStorage)))
