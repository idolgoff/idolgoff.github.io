import {SEND_PURCHASE} from "../actions/ActionTypes";

/**
 * Created by dolgov.ivan@gmail.com on 26.04.2018.
 */

const defaultPurchase = {
    email: "",
    password: "",
    gender: undefined,

    firstName: "",
    lastName: "",

    shipStreetAddress: "",
    shipAptSuite: "",
    shipZipCode: "",
    shipCity: "",
    shipState: "",
    shipCountry: "UNITED STATES",

    billingStreetAddress: "",
    billingAptSuite: "",
    billingZipCode: "",
    billingCity: "",
    billingState: "",
    billingCountry: "UNITED STATES",

    mobileNumber: "",
    sameAddress: true,

    cardNumber: "",
    cardSecurityCode: "",
    cardMonth: "",
    cardYear: ""
};

const purchase = (state = defaultPurchase, action) => {
    switch (action.type) {
        case SEND_PURCHASE:
            return action.data;
        default:
            return state;
    }
};

export default purchase;

export const getPurchaseData = state => state.purchase;