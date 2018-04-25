import * as React from "react";
import TextInput from "../../atoms/TextInput";

import * as s from "./TextField.styl";

interface IProps {
    id?: string;
    value?: string;
    className?: string;
    password?: boolean;
    placeholder?: string;
    error?: string | null;
    validate?;
    format?;
    help?: string;
    ok?: boolean | null;
    onChange?;
    onBlur?;
}

export default class TextField extends React.Component<IProps, {}> {

    keyDownHandler = e => {
        const {validate = null} = this.props;
        const value = e.key;
        // console.log(validate, e.key, e.keyCode, e.charCode, validate.test(e.key));
        if (validate && !(~["Backspace", "Tab", "Home", "End", "Delete"].indexOf(e.key) || ~["z", "x", "c", "v", "a"].indexOf(e.key) && e.ctrlKey)) {
            if (!validate.test(value)) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    }

    render() {
        const {
            error = null,
            ok = null,
            placeholder = "",
            help = "",
            value = "",
            format = null,
            ...rest
        } = this.props;

        const className = ok ? s.okTextField : (error ? s.errorTextField : s.textField);
        const passValue = format && value ? format(value) : value;

        return (
            <div className={className}>
                <TextInput
                    onKeyDown={this.keyDownHandler}
                    value={passValue}
                    {...rest}
                />
                {!this.props.value && help && <div className={s.help}/>}
                {placeholder &&
                <div className={`${s.placeholder} ${this.props.value ? s.active : ""}`}>{placeholder}</div>}
                {error && <div className="error">{error}</div>}
            </div>
        );
    }

}
