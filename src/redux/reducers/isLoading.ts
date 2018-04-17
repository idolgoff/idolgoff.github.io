import {uniq} from "lodash/array";
import {REQUEST_DATA, RESPONSE_FAIL, RESPONSE_OK} from "../actions/ActionTypes";

export const isLoading = (state = [], action) => {

    let newState;

    switch (action.type) {
        case REQUEST_DATA:
            return uniq([...state, action.requestType]);
        case RESPONSE_FAIL:
        case RESPONSE_OK:
            let idx = state.indexOf(action.requestType);
            if (idx !== -1) {
                newState = [...state.slice(0, idx), ...state.slice(idx + 1)];
                return newState;
            }
            return state;
        default:
            return state;
    }
};

export const getIsLoading = state => state.isLoading.length > 0;
export const getWhatIsLoading = state => state.isLoading; // (window as any).whatIsLoadingNow