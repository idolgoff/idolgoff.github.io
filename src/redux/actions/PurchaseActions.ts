/**
 * Created by dolgov.ivan@gmail.com on 26.04.2018.
 */
import {actionTemplate} from "./ActionTemplate";
import {SEND_PURCHASE} from "./ActionTypes";
import api from "../../api/PurchaseApi";

// export const sendPurchase = actionTemplate({
//     request: api.sendPurchase,
//     requestType: "sendPurchase",
//     dispatchType: SEND_PURCHASE
// });

export const sendPurchase = (data) => dispatch => {
    dispatch({
        type: SEND_PURCHASE,
        data
    });
};