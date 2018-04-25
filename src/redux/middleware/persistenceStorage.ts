import {SEND_PURCHASE} from "../actions/ActionTypes";

const APPLICATION_STORAGE_KEY = "testApp";

const saveToStorage = data => {
    try {
        localStorage.setItem(APPLICATION_STORAGE_KEY, JSON.stringify(data));
    }
    catch (e) {
        console.log("catch:", e);
    }
};

export const readFromStorage = () => {
    try {
        return JSON.parse(localStorage.getItem(APPLICATION_STORAGE_KEY)) || {};
    } catch (e) {
        console.log("catch:" + e);
    }
    return {};
};

export const persistenceStorage = store => next => action => {
    switch (action.type) {
        case SEND_PURCHASE:
            saveToStorage({purchase: action.data});
    }
    return next(action);
};