import * as React from "react";
import {connect} from "react-redux";
import Button from "../atoms/button/Button";
import Checkbox from "../atoms/checkbox/Checkbox";
import TextField from "../molecules/textField/TextField";
import PageHeader from "../organisms/pageHeader/PageHeader";
import PageTitle from "../organisms/pageTitle/PageTitle";
import CartWidget from "../organisms/cartWidget/CartWidget";
import CheckoutText from "../organisms/checkoutText/CheckoutText";
import CardForm from "../organisms/cartForm/CardForm";
import GenderSelect from "../molecules/genderSelect/GenderSelect";
import {withFormik} from "formik";
import Yup from "yup";
import {phoneRegexp} from "../../../utils/regexp";
import AddressForm from "../organisms/addressForm/AddressForm";
import FormText from "../atoms/formText/FormText";
import {getPurchaseData} from "../../../redux/reducers/purchase";
import {sendPurchase} from "../../../redux/actions/PurchaseActions";
import * as verge from "verge";
import {isMobile} from "../constants";

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
        const {isSubmitting, isValid, errors} = this.props;
        if (prevProps.isSubmitting && !isSubmitting && !isValid) {
            // console.log(errors);
            // get highest elements on the page
            const el = Object.keys(errors).reduce((el, highest) => {
                try {
                    const rect1 = verge.rectangle(document.getElementById(el));
                    const rect2 = verge.rectangle(document.getElementById(highest));
                    // there will be negative offset
                    highest = rect1.top < rect2.top ? el : highest;
                } catch (e) {
                    console.log(e);
                }
                return highest;
            });
            if (el) {
                document.getElementById(el).scrollIntoView({ behavior: "smooth" });
            }
        }
    }

    render() {
        const {
            values,
            touched,
            errors,
            dirty,
            setFieldValue,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
        } = this.props;

        return (
            <form onSubmit={handleSubmit}>

                <h3>Create account</h3>
                <div className="grid">
                    <div className="col">
                        <TextField
                            id="email"
                            placeholder="Email address"
                            value={values.email}
                            error={errors.email && touched.email ? errors.email : ""}
                            ok={values.email && !errors.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="col">
                        <TextField
                            id="password"
                            placeholder="Password"
                            password={true}
                            value={values.password}
                            error={errors.password && touched.password ? errors.password : ""}
                            ok={values.password && !errors.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>

                <h3>Choose your subscription type</h3>
                <GenderSelect
                    id="gender"
                    value={values.gender}
                    error={errors.gender && touched.gender ? errors.gender : ""}
                    onChange={value => setFieldValue("gender", value)}
                />

                <h3>Shipping address</h3>
                <div className="grid">
                    <div className="col">
                        <TextField
                            id={`firstName`}
                            placeholder="First name"
                            value={values[`firstName`]}
                            error={errors[`firstName`] && touched[`firstName`] ? errors[`firstName`] : ""}
                            ok={values[`firstName`] && !errors[`firstName`]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="col">
                        <TextField
                            id={`lastName`}
                            placeholder="Last name"
                            value={values[`lastName`]}
                            error={errors[`lastName`] && touched[`lastName`] ? errors[`lastName`] : ""}
                            ok={values[`lastName`] && !errors[`lastName`]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
                <AddressForm
                    prefix="ship"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                />

                <div className="grid">
                    <div className="col">
                        <TextField
                            id={`mobileNumber`}
                            placeholder="Mobile number (Optional)"
                            validate={/\d|\+|-/}
                            value={values[`mobileNumber`]}
                            error={errors[`mobileNumber`] && touched[`mobileNumber`] ? errors[`mobileNumber`] : ""}
                            ok={values[`mobileNumber`] && !errors[`mobileNumber`]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
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
                    <AddressForm
                        prefix="billing"
                        values={values}
                        errors={errors}
                        touched={touched}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                    />
                </div>}

                <h3>Secure card payment</h3>
                <CardForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    primary={true}
                    onClick={null}
                    className="m-b-sm"
                >Buy now {!isMobile && <span className="superArrow">→</span>}</Button>

            </form>
        );
    }
}

const passMinLength = 8;
const EnhancedPurchaseForm = withFormik({
    mapPropsToValues: props => props["purchaseData"],
    validationSchema: props => Yup.object().shape({
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
    }),
    handleSubmit: (values, {props, setSubmitting}) => {
        props["sendPurchase"](values);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: "PurchaseForm",
})(InnerPurchaseForm);


class CheckoutPage extends React.Component<{purchaseData, sendPurchase}, {}> {

    render() {
        return (
            <div className="container">

                <PageHeader/>

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
                    <EnhancedPurchaseForm {...this.props} />
                </div>

                <div className="leftBlock">
                    <CheckoutText/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    purchaseData: getPurchaseData(state)
});

export default connect(mapStateToProps, {
    sendPurchase
})(CheckoutPage);
