/**
 * Created by dolgov.ivan@gmail.com on 17.04.2018.
 */
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import {messages} from "./reducers/messages";
import {isLoading} from "./reducers/isLoading";
import {persistenceStorage, readFromStorage} from "./middleware/persistenceStorage";

import {catalogs} from "./reducers/catalogs";
import {items} from "./reducers/items";
import {filter} from "./reducers/filter";
import {orders} from "./reducers/orders";
import {user} from "./reducers/user";
import {news} from "./reducers/news";

const appReducer = combineReducers({
    catalogs,
    items,
    filter,
    orders,
    user,
    news,
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
