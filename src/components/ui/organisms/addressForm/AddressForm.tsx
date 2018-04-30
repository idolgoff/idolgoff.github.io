import * as React from "react";
import {usaStates} from "../../../../utils/usaStates";
import TextField from "../../molecules/textField/TextField";
import SelectField from "../../molecules/selectField/SelectField";
import formHoc from "../../../../utils/formHoc";

const Street = props => formHoc({
    id: `${props.prefix}StreetAddress`,
    placeholder: "Street address", ...props
})(TextField);
const AptSuite = props => formHoc({id: `${props.prefix}AptSuite`, placeholder: "Apt/Suite (Optional)", ...props})(TextField);
const ZipCode = props => formHoc({id: `${props.prefix}ZipCode`, placeholder: "Zip code", validate: /\d/, ...props})(TextField);
const City = props => formHoc({id: `${props.prefix}City`, placeholder: "City", ...props})(TextField);
const State = props => formHoc({id: `${props.prefix}State`, placeholder: "State", ...props, options: usaStates})(SelectField);
const Country = props => formHoc({id: `${props.prefix}Country`, placeholder: "Country", ...props})(TextField);

const AddressForm = props => {
    return (
        <div>
            <div className="grid">
                <div className="col2">
                    <Street {...props} />
                </div>
                <div className="col">
                    <AptSuite {...props} />
                </div>
            </div>
            <div className="grid">
                <div className="col">
                    <ZipCode {...props} />
                </div>
                <div className="col">
                    <City {...props}/>
                </div>
                <div className="col">
                    <State {...props} />
                </div>
            </div>
            <div className="grid">
                <div className="col">
                    <Country {...props} />
                </div>
            </div>
        </div>
    );
};

export default AddressForm;