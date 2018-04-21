import * as React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Checkbox from "../atoms/Checkbox";
import TextField from "../molecules/TextField";
import SelectField from "../molecules/SelectField";

export default class Checkout extends React.Component<{}, {}> {

  render() {
    return(
      <div className="container">

        <div className="logo">Logo block</div>

        <div className="rightBlock">
          <h1 className="title">Month-to-month subscribtion</h1>
          <p className="subtitle">Billed monthly. Renews automaticly, cancel any time. Free shipping.</p>
        </div>

        <div className="leftBlock">
          <div className="cart">
            <div className="cartImage"></div>
            <hr />
            <div className="cartContains">
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
                <dd className="attention">−$5</dd>
              </dl>
              <dl>
                <dt>Credit (Balance 100$)</dt>
                <dd>$50</dd>
              </dl>
            <hr />
            <dl>
              <dt>TOTAL</dt>
              <dd>$25.00</dd>
            </dl>
            </div>
            <p>Have a coupon code?</p>
          </div>
        </div>

        <div className="rightBlock">

          <h3>Choose your subscribtion type</h3>
          <div>
          </div>

          <h3>Shipping address</h3>
          <div>

            <div className="row">
              <TextField
                placeholder="First name"
                validate={/\d|\s/}
                ok
              />
            </div>
            <div className="row">
              <TextField
                value="Dolgov"
                placeholder="Last name"
                ok
              />
            </div>
            <div className="row">
              <TextField
                value=""
                placeholder="Street address"
              />
            </div>
            <div className="row">
              <Checkbox
                checked={true}
                label="Use this address as my billing address"
                onChange={null}
              />
            </div>
          </div>

          <h3>Secure card payment</h3>
          <div>
            <h4 className="uppercase green">128-bit encription. You're safe</h4>
            <div className="row">
              <TextField
                value=""
              />
            </div>
            <div className="row">
              <SelectField
                value="test data"
                ok
              />
              <TextField
                value=""
                placeholder="Card number"
                error="This field is required"
              />
            </div>
            <div className="row">
            </div>
          </div>

          <Button primary>Buy now</Button>
        </div>
        <div className="leftBlock">
          <Text>
            You will receive an email confirmation when recipient will receive your gift.
            Scenbird ship between 15th and 18th of every month.
            Recipient will receive an email confirmation of shipment every month.
            Please, allow 5-7 days for delivery.
          </Text>
        </div>
      </div>
    );
  }
}
