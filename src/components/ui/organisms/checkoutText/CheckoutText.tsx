import * as React from "react";
import Text from "../../atoms/text/Text";

const checkoutImg = require("../../../../assets/img/purchase.jpg");

import * as s from "./CheckoutText.styl";

const CheckoutText = ({}) => (
    <div className={s.checkoutText}>
        <img src={checkoutImg} className="img-responsive" alt="checkout"/>
        <Text className={s.text}>
            You will receive an email confirmation when recipient will receive your gift.
            Scentbird ship between 15th and 18th of every month.
            Recipient will receive an email confirmation of shipment every month.
            Please, allow 5-7 days for delivery.
        </Text>
    </div>
);

export default CheckoutText;