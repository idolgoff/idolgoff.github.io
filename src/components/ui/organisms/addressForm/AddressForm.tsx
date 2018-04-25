import * as React from "react";
import {usaStates} from "../../../../utils/usaStates";
import TextField from "../../molecules/textField/TextField";
import FormText from "../../atoms/formText/FormText";
import SelectField from "../../molecules/selectField/SelectField";

const AddressForm =
    ({
         values, errors, touched, handleChange, handleBlur, prefix
     }) => (
        <div>
            <div className="grid">
                <div className="col2">
                    <TextField
                        id={`${prefix}StreetAddress`}
                        placeholder="Street address"
                        value={values[`${prefix}StreetAddress`]}
                        error={errors[`${prefix}StreetAddress`] && touched[`${prefix}StreetAddress`] ? errors[`${prefix}StreetAddress`] : ""}
                        ok={values[`${prefix}StreetAddress`] && !errors[`${prefix}StreetAddress`]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="col">
                    <TextField
                        id={`${prefix}AptSuite`}
                        placeholder="Apt/Suite (Optional)"
                        value={values[`${prefix}AptSuite`]}
                        error={errors[`${prefix}AptSuite`] && touched[`${prefix}AptSuite`] ? errors[`${prefix}AptSuite`] : ""}
                        ok={values[`${prefix}AptSuite`] && !errors[`${prefix}AptSuite`]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
            </div>

            <div className="grid">
                <div className="col">
                    <TextField
                        id={`${prefix}ZipCode`}
                        placeholder="Zip code"
                        validate={/\d/}
                        value={values[`${prefix}ZipCode`]}
                        error={errors[`${prefix}ZipCode`] && touched[`${prefix}ZipCode`] ? errors[`${prefix}ZipCode`] : ""}
                        ok={values[`${prefix}ZipCode`] && !errors[`${prefix}ZipCode`]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="col">
                    <TextField
                        id={`${prefix}City`}
                        placeholder="City"
                        value={values[`${prefix}City`]}
                        error={errors[`${prefix}City`] && touched[`${prefix}City`] ? errors[`${prefix}City`] : ""}
                        ok={values[`${prefix}City`] && !errors[`${prefix}City`]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="col">
                    <SelectField
                        id={`${prefix}State`}
                        placeholder="State"
                        value={values[`${prefix}State`]}
                        values={usaStates}
                        error={errors[`${prefix}State`] && touched[`${prefix}State`] ? errors[`${prefix}State`] : ""}
                        ok={values[`${prefix}State`] && !errors[`${prefix}State`]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
            </div>
            <div className="grid">
                <div className="col">
                    <TextField
                        id={`${prefix}Country`}
                        placeholder="Country"
                        value={values[`${prefix}Country`]}
                        error={errors[`${prefix}Country`] && touched[`${prefix}Country`] ? errors[`${prefix}Country`] : ""}
                        ok={values[`${prefix}Country`] && !errors[`${prefix}Country`]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
            </div>
        </div>

    );

export default AddressForm;