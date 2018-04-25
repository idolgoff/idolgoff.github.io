import * as React from "react";
import * as s from "./CartWidget.styl";
import TextField from "../../molecules/textField/TextField";

const itemSrc = require("../../../../assets/img/item.jpg");

class CartWidget extends React.Component<{}, {showCoupon}> {

    state = {
        showCoupon: false
    };

    couponClickHandler = e => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({showCoupon: !this.state.showCoupon});
    }

    render() {
        return (
            <div className={s.cart}>
                <img src={itemSrc} className={`${s.cartImage} img-responsive`} alt="purchase item"/>
                <hr/>
                <div className={s.cartContains}>
                    <div>
                        <dl>
                            <dt>Monthly subscription</dt>
                            <dd>$14.95</dd>
                        </dl>
                        <dl>
                            <dt>Shipping</dt>
                            <dd>FREE</dd>
                        </dl>
                        <dl>
                            <dt>Tax</dt>
                            <dd>$2.35</dd>
                        </dl>
                        <dl>
                            <dt>Discount</dt>
                            <dd className={s.attention}>−$5</dd>
                        </dl>
                        <dl>
                            <dt>Credit (Balance 100$)</dt>
                            <dd>$50</dd>
                        </dl>
                    </div>
                    <hr/>
                    <div>
                        <dl>
                            <dt className="big">TOTAL</dt>
                            <dd className="big">$25.00</dd>
                        </dl>
                    </div>
                </div>
                {this.state.showCoupon && <TextField
                    placeholder="Enter coupon code"
                />}
                <p>
                    Have a <a href="#" title="coupon code" className="local" onClick={this.couponClickHandler}>coupon code</a>?
                </p>
            </div>
        );
    }
}

export default CartWidget;