import {LOGIN_USER, LOGOUT_USER, UPDATE_USER} from "../actions/ActionTypes";

const APPLICATION_STORAGE_KEY = "app";

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
    let user;
    switch (action.type) {
        case LOGIN_USER:
        case UPDATE_USER:
            saveToStorage({
                user: {
                    user: action.user,
                    isLoggedIn: true
                }
            });
            break;
        case LOGOUT_USER:
            saveToStorage({});
            break;
    }
    return next(action);
};