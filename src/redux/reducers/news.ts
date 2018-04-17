/**
 * Created by dolgov.ivan@gmail.com on 17.04.2018.
 *
 * News
 * -- byId: Object
 * -- allIds: Array
 */
import {combineReducers} from "redux";

const byId = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const allIds = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const news = combineReducers({byId, allIds});
