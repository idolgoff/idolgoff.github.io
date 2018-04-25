import * as React from "react";

const TextInput =
    ({
         className = "",
         password = false,
         ...props
     }) => (
        <input type={password ? "password" : "text"}
               className={className}
               {...props}
        />
    );

export default TextInput;
