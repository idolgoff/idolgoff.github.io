import * as React from "react";
import * as s from "./Button.styl";

const Button =
    ({
         children,
         primary = false,
         className = "",
         onClick,
         ...props
     }) => (
        <button className={`${className} ${primary ? s.primaryButton : s.button}`} {...props}>{children}</button>
    );

export default Button;
