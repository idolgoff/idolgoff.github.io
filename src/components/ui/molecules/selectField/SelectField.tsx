import * as React from "react";
import SelectInput from "../../atoms/SelectInput";

import * as s from "./SelectField.styl";

interface IProps {
    id?: string;
    value: any;
    values: string[] | { value: string | number; text: string }[];
    className?: string;
    placeholder?: string;
    error?: string | null;
    ok?: boolean | null;
    onChange?;
    onBlur?;
}

export default class SelectField extends React.Component<IProps, {}> {

    render() {
        const {
            ok = null,
            error = null,
            placeholder = "",
            values,
            ...props
        } = this.props;

        const className = ok ? s.okSelectField : (error ? s.errorSelectField : s.selectField);
        const passValues = ["", ...values];

        return (
            <div className={className}>
                <SelectInput values={passValues} {...props}/>
                {placeholder &&
                <div className={`${s.placeholder} ${this.props.value ? s.active : ""}`}>{placeholder}</div>}
                {error && <div className="error">{error}</div>}
            </div>
        );
    }
}
