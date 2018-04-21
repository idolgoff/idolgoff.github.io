import * as React from "react";

const TextInput = ({
  className = "",
  ...props
}) => (
  <input type="text"
    className={className}
    {...props}
  />
);

export default TextInput;
