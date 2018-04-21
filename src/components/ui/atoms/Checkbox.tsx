import * as React from "react";

const Checkbox = ({
  checked = false,
  label = "",
  onChange,
}) => (
  <label>
    <input type="checkbox" checked={checked} onChange={onChange} />
    {label}
  </label>
);

export default Checkbox;
