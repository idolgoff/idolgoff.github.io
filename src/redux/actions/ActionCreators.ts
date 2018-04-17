import {CLEAR_ERROR, RESPONSE_FAIL, RESPONSE_OK, REQUEST_DATA} from "./ActionTypes";

export const requestData = (dispatch, requestType = null) => {
    dispatch({
        type: REQUEST_DATA,
        requestType
    });
};

export const responseFail = (dispatch, error, requestType = null) => {
    dispatch({
        type: RESPONSE_FAIL,
        error,
        requestType
    });
};

export const responseOk = (dispatch, requestType = null) => {
    dispatch({
        type: RESPONSE_OK,
        requestType
    });
};

export const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_ERROR
    });
};
