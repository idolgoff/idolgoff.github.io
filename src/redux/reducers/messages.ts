import {combineReducers} from "redux";
import {
    CLEAR_ERROR, MAKE_ALERT, MAKE_ERROR, MAKE_NOTIFICATION, READ_ALERT, READ_NOTIFICATION,
    RESPONSE_FAIL
} from "../actions/ActionTypes";

const errorMessage = (state = "", action) => {
    switch (action.type) {
        case MAKE_ERROR:
        case RESPONSE_FAIL:
            return action.error;
        case CLEAR_ERROR:
            return "";
        default:
            return state;
    }
};

const notifyMessage = (state = "", action) => {
    switch (action.type) {
        case MAKE_NOTIFICATION:
            return action.message;
        case READ_NOTIFICATION:
            return "";
        default:
            return state;
    }
};

const alertMessage = (state = "", action) => {
    switch (action.type) {
        case MAKE_ALERT:
            return action.message;
        case READ_ALERT:
            return "";
        default:
            return state;
    }
};

export const messages = combineReducers({errorMessage, notifyMessage, alertMessage});

export const getErrorMessage = state => state.messages.errorMessage;
export const getNotifyMessage = state => state.messages.notifyMessage;
export const getAlertMessage = state => state.messages.alertMessage;
