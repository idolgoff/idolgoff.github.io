/**
 * Created by dolgov.ivan@gmail.com on 17.04.2018.
 *
 * User
 * -- isLogged: Boolean
 * -- userData: Object
 */
import {combineReducers} from "redux";

const isLogged = (state = false, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const userData = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const user = combineReducers({isLogged, userData});