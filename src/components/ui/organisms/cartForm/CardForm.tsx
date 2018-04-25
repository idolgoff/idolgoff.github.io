import * as React from "react";
import SelectField from "../../molecules/selectField/SelectField";
import TextField from "../../molecules/textField/TextField";
import FormText from "../../atoms/formText/FormText";
import * as s from "./CartForm.styl";
import {isMobile} from "../../constants";

const cardsImg = require("../../../../assets/img/cards.png");
const protectionImg = require("../../../../assets/img/protection.png");

const currentYear = +(new Date).getFullYear();
const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
const years = [currentYear, currentYear + 1, currentYear + 2, currentYear + 3].map(y => y + "");
console.log(years);

const CardForm = ({values, errors, touched, handleChange, handleBlur}) => (
    <div className="well">
        <h4 className={s.protection}>
            <img src={protectionImg}
                 className={s.protectionImg}
                 alt="128 encrypt protected"
            /> 128-bit encription. You're safe
            <img src={cardsImg}
                 className={s.cards}
                 alt="Accept Visa, Mastercard, American Express"
            />
        </h4>
        <div className="grid">
            <div className="col2">
                <TextField
                    id="cardNumber"
                    placeholder="Card number"
                    validate={/\d/}
                    value={values.cardNumber}
                    error={errors.cardNumber && touched.cardNumber ? errors.cardNumber : ""}
                    ok={values.cardNumber && !errors.cardNumber }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    help="This is help"
                    format={value => value.replace(/\s*/g, "").match(/.{1,4}/g).join(" ")}
                />
                <div className="grid-sm m-t-sm m-b-n-sm">
                    <div className="col">
                        <SelectField
                            id="cardMonth"
                            placeholder="Month"
                            values={months}
                            value={values.cardMonth}
                            error={errors.cardMonth && touched.cardMonth ? errors.cardMonth : ""}
                            ok={values.cardMonth && !errors.cardMonth }
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="col">
                        <SelectField
                            id="cardYear"
                            placeholder="Year"
                            values={years}
                            value={values.cardYear}
                            error={errors.cardYear && touched.cardYear ? errors.cardYear : ""}
                            ok={values.cardYear && !errors.cardYear }
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {!isMobile && <div className="col mobile-hidden">
                        <FormText>Exp</FormText>
                    </div>}
                </div>
            </div>
            <div className="col">
                <TextField
                    id="cardSecurityCode"
                    placeholder="Security code"
                    validate={/\d/}
                    value={values.cardSecurityCode}
                    error={errors.cardSecurityCode && touched.cardSecurityCode ? errors.cardSecurityCode : ""}
                    ok={values.cardSecurityCode && !errors.cardSecurityCode }
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <div className={s.help} />
            </div>
        </div>
    </div>
);

export default CardForm;