import * as React from "react";
import * as s from "./FormText.styl";

const FormText =
    ({
         children,
         className = "",
         ...props
     }) => (
        <div className={`${s.formText} ${className}`} {...props}>{children}</div>
    );

export default FormText;