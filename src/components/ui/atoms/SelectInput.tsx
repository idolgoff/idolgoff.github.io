import * as React from "react";

const SelectInput =
    ({
         value,
         options,
         ...props
     }) => (
        <select value={value} {...props}>
            {options.map(v =>
                typeof v === "string" ?
                    <option value={v}>{v}</option> :
                    <option value={v.value}>{v.text}</option>
            )}
        </select>
    );

export default SelectInput;
