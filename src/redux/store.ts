import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import {messages} from "./reducers/messages";
import {isLoading} from "./reducers/isLoading";
import purchase from "./reducers/purchase";
import {persistenceStorage, readFromStorage} from "./middleware/persistenceStorage";

const appReducer = combineReducers({
    purchase,
    messages,
    isLoading
});

const persistedState = readFromStorage();
const isProduction = process.env["NODE_ENV"] === "production";

declare const window;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = isProduction ?
    createStore(appReducer, persistedState, applyMiddleware(thunk, persistenceStorage)) :
    createStore(appReducer, persistedState, composeEnhancers(applyMiddleware(thunk, logger, persistenceStorage)));
