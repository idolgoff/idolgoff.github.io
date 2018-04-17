/**
 * Created by dolgov.ivan@gmail.com on 17.04.2018.
 *
 * Items
 * -- byId: Object
 * -- allIds: Array
 * -- idsByCatalogId: Array
 * -- wishlistedIds: Array
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

const idsByCatalogId = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const wishListedIds = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export const items = combineReducers({byId, allIds, idsByCatalogId, wishListedIds});
