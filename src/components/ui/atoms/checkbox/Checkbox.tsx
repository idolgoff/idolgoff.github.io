import * as React from "react";
import * as s from "./Checkbox.styl";

const Checkbox =
    ({
         checked = false,
         label = "",
         ...props
     }) => (
        <span className={s.checkbox}>
        <label>
            <input type="checkbox" checked={checked} {...props}/>
            <div className={s.pseudoCheckbox}/> {label}
        </label>
    </span>
    );

export default Checkbox;
