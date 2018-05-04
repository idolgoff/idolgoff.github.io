import * as React from "react";
import {phoneRegexp} from "../../../../utils/regexp";
import {isMobile} from "../../constants";
import {Form, withFormik} from "formik";
import Yup from "yup";
import * as verge from "verge";
import {sendPurchase} from "../../../../redux/actions/PurchaseActions";
import {getPurchaseData} from "../../../../redux/reducers/purchase";
import {connect} from "react-redux";
import TextField from "../../molecules/textField/TextField";
import GenderSelect from "../../molecules/genderSelect/GenderSelect";
import AddressForm from "../addressForm/AddressForm";
import FormText from "../../atoms/formText/FormText";
import Checkbox from "../../atoms/checkbox/Checkbox";
import Button from "../../atoms/button/Button";
import CardForm from "../cartForm/CardForm";
import formFieldHoc from "../../../../utils/formHoc";

const passMinLength = 8;

const validationSchema = {
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required!"),
    password: Yup.string()
        .min(passMinLength, "Password is too short")
        .required("Password is required!"),

    gender: Yup.string()
        .required("Your gender is required!"),

    firstName: Yup.string()
        .required("First name is required!"),
    lastName: Yup.string()
        .required("Last name is required too!"),

    shipStreetAddress: Yup.string()
        .required("Street address is required!"),
    shipAptSuite: Yup.string(),
    shipZipCode: Yup.string()
        .required("Zip code must be provided!"),
    shipCity: Yup.string()
        .required("City is required!"),
    shipState: Yup.string()
        .required("State is required!"),
    shipCountry: Yup.string()
        .test("test empty", "Country is required!", value => !!value)
        .required("Country is required!"),

    sameAddress: Yup.boolean(),

    billingStreetAddress: Yup.string().when("sameAddress", {
        is: false,
        then: Yup.string().required("Street address is required!"),
        otherwise: Yup.string()
    }),
    billingAptSuite: Yup.string(),
    billingZipCode: Yup.string().when("sameAddress", {
        is: false,
        then: Yup.string().required("Zip code must be provided!"),
        otherwise: Yup.string()
    }),
    billingCity: Yup.string().when("sameAddress", {
        is: false,
        then: Yup.string().required("City is required!"),
        otherwise: Yup.string()
    }),
    billingState: Yup.string().when("sameAddress", {
        is: false,
        then: Yup.string().required("State is required!"),
        otherwise: Yup.string()
    }),
    billingCountry: Yup.string().when("sameAddress", {
        is: false,
        then: Yup.string().test("test empty", "Country is required!", value => !!value).required("Country is required!"),
        otherwise: Yup.string()
    }),

    mobileNumber: Yup.string()
        .matches(phoneRegexp, {
            message: "Mobile number is not valid",
            excludeEmptyString: true
        }),

    cardNumber: Yup.string()
        .test("111 code", "Card number is wrong!", value => !value || value.replace(/\s/g, "").length >= 16 && value.replace(/\s/g, "").length <= 18)
        .required("Card number is required!"),
    cardSecurityCode: Yup.string()
        .min(3, "Secret code must be 3 symbols long!")
        .max(3, "Secret code must be 3 symbols long!")
        .test("111 code", "Secret code detected!", value => !value || value.trim() !== "111")
        .required("Card security code is required!"),
    cardMonth: Yup.string()
        .test("test empty", "Month is required!", value => +value)
        .required("Month is required!"),
    cardYear: Yup.mixed()
        .test("test empty", "Year is required too!", value => +value)
        .required("Year is required too!"),
};

const handleSubmit = (values, {props, setSubmitting}) => {
    props["sendPurchase"](values);
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }, 1000);
};

const Email = props => formFieldHoc({id: "email", placeholder: "Email address", ...props})(TextField);
const Password = props => formFieldHoc({id: "password", placeholder: "Password", password: true, ...props})(TextField);
const Gender = props => formFieldHoc({id: "gender", ...props})(GenderSelect);
const FirstName = props => formFieldHoc({id: "firstName", placeholder: "First name", ...props})(TextField);
const LastName = props => formFieldHoc({id: "lastName", placeholder: "Last name", ...props})(TextField);
const MobileNumber = props => formFieldHoc({
    id: "mobileNumber",
    placeholder: "Mobile number (Optional)",
    validate: /\d|\+|-/,
    ...props
})(TextField);


interface IInnerPurchaseFormProps {
    values;
    touched;
    errors;
    isValid;
    isSubmitting;
    handleChange;
    handleBlur;
    handleSubmit;
    handleReset;
    dirty?;
    setFieldValue?;
}

class InnerPurchaseForm extends React.Component<IInnerPurchaseFormProps, {}> {

    componentDidUpdate(prevProps) {
        const {isSubmitting, isValid} = this.props;

        // Handle errors
        if (prevProps.isSubmitting && !isSubmitting && !isValid) {
            // Scroll to highest elements on the page
            this.scrollToErrors();
        }
    }

    /**
     * If error occurs while submitting form we should show error in visible area
     */
    scrollToErrors = () => {
        const {errors} = this.props;

        // Get the highest element on page
        const el = Object.keys(errors).reduce((el, highest) => {
            try {
                const rect1 = verge.rectangle(document.getElementById(el));
                const rect2 = verge.rectangle(document.getElementById(highest));
                highest = rect1.top < rect2.top ? el : highest;
            } catch (e) {
                console.log(e);
            }
            return highest;
        });

        // Scroll
        if (el) {
            document.getElementById(el).scrollIntoView({behavior: "smooth"});
        }
    }

    render() {
        const {
            values,
            setFieldValue,
            isSubmitting,
            handleChange,
            handleSubmit,
        } = this.props;

        return (
            <Form>

                <h3>Create account</h3>
                <div className="grid">
                    <div className="col">
                        <Email {...this.props} />
                    </div>
                    <div className="col">
                        <Password {...this.props} />
                    </div>
                </div>

                <h3>Choose your subscription type</h3>
                <Gender {...this.props} onChange={value => setFieldValue("gender", value)}/>

                <h3>Shipping address</h3>
                <div className="grid">
                    <div className="col">
                        <FirstName {...this.props} />
                    </div>
                    <div className="col">
                        <LastName {...this.props} />
                    </div>
                </div>

                <AddressForm prefix="ship" {...this.props} />

                <div className="grid">
                    <div className="col">
                        <MobileNumber {...this.props} />
                    </div>
                    <div className="col mobile-hidden">
                        <FormText className="small">We may send you special discount and offers</FormText>
                    </div>
                </div>

                <div className="row">
                    <Checkbox
                        id="sameAddress"
                        checked={values.sameAddress}
                        label="Use this address as my billing address"
                        onChange={handleChange}
                    />
                </div>

                {!values.sameAddress && <div>
                    <h3>Billing address</h3>
                    <AddressForm prefix="billing" {...this.props} />

                </div>}

                <h3>Secure card payment</h3>
                <CardForm {...this.props} />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    primary={true}
                    onClick={null}
                    className="m-b-sm"
                >Buy now {!isMobile && <span className="superArrow">→</span>}</Button>

            </Form>
        );
    }
}

const CheckoutForm = withFormik({
    mapPropsToValues: props => props["purchaseData"],
    validationSchema: props => Yup.object().shape(validationSchema),
    handleSubmit,
    displayName: "PurchaseForm",
})(InnerPurchaseForm);

const mapStateToProps = (state) => ({
    purchaseData: getPurchaseData(state)
});

export default connect(mapStateToProps, {
    sendPurchase
})(CheckoutForm);
