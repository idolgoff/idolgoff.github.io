import * as React from "react";
import SelectField from "../../molecules/selectField/SelectField";
import TextField from "../../molecules/textField/TextField";
import FormText from "../../atoms/formText/FormText";
import * as s from "./CartForm.styl";
import {isMobile} from "../../constants";
import formHoc from "../../../../utils/formHoc";

const cardsImg = require("../../../../assets/img/cards.png");
const protectionImg = require("../../../../assets/img/protection.png");

const currentYear = +(new Date).getFullYear();
const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
const years = [currentYear, currentYear + 1, currentYear + 2, currentYear + 3].map(y => y + "");

const CardNumber = props => formHoc({
    id: "cardNumber",
    placeholder: "Card number",
    validate: /\d/,
    help: "This is help",
    format: value => value.replace(/\s*/g, "").match(/.{1,4}/g).join(" "),
    ...props
})(TextField);

const CardMonth = props => formHoc({
    id: "cardMonth",
    placeholder: "Month",
    options: months,
    ...props
})(SelectField);

const CardYear = props => formHoc({
    id: "cardYear",
    placeholder: "Year",
    options: years,
    ...props
})(SelectField);

const SecurityCode = props => formHoc({
    id: "cardSecurityCode",
    placeholder: "Security code",
    validate: /\d/,
    ...props
})(TextField);

const CardForm = props => {

    return (
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

                    <CardNumber {...props} />

                    <div className="grid-sm m-t-sm m-b-n-sm">

                        <div className="col">
                            <CardMonth {...props} />
                        </div>

                        <div className="col">
                            <CardYear {...props} />
                        </div>

                        {isMobile ||
                        <div className="col mobile-hidden">
                            <FormText>Exp</FormText>
                        </div>
                        }
                    </div>
                </div>

                <div className="col">
                    <SecurityCode {...props} />
                    <div className={s.help}/>
                </div>
            </div>
        </div>
    );
};

export default CardForm;