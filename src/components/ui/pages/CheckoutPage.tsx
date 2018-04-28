import * as React from "react";
import PageTitle from "../organisms/pageTitle/PageTitle";
import CartWidget from "../organisms/cartWidget/CartWidget";
import CheckoutText from "../organisms/checkoutText/CheckoutText";
import CheckoutForm from "../organisms/checkoutForm/CheckoutForm";
import MainTemplate from "../templates/MainTemplate";

const CheckoutPage = () => (
    <MainTemplate>

        <div className="rightBlock">
            <PageTitle
                title="Month-to-month subscribtion"
                mobileTitle="Monthly subscribtion"
                subtitle="Billed monthly. Renews automaticly, cancel any time. Free shipping."
            />
        </div>

        <div className="leftBlock">
            <CartWidget/>
        </div>

        <div className="rightBlock">
            <CheckoutForm {...this.props} />
        </div>

        <div className="leftBlock">
            <CheckoutText/>
        </div>

    </MainTemplate>
);

export default CheckoutPage;