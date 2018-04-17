/**
 * Created by dolgov.ivan@gmail.com on 17.04.2018.
 */
import {requestData, responseFail, responseOk} from "./ActionCreators";

export const actionTemplate =
    ({
         request,
         requestType,
         dispatchType
     }) => (...requestParams) => dispatch => {
        requestData(dispatch, requestType);
        return request(...requestParams)
            .then(
                response => {
                    responseOk(dispatch, requestType);
                    dispatch({
                        type: dispatchType,
                        ...response
                    });
                },
                error => responseFail(dispatch, error, requestType)
            );
    };
