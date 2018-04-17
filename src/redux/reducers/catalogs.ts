/**
 * Created by dolgov.ivan@gmail.com on 17.04.2018.
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

const currentId = (state = undefined, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const catalogs = combineReducers({byId, allIds, currentId});

/*
Catalogs
-- byId: Object
-- allIds: Array
-- currentCatalogId: Number
 */