import * as React from "react";

const SelectInput = ({
  value,
  values = []
}) => (
  <select value={value}>
    {values.map(v =>
      <option value={v.vaule}>{v.text}</option>
    )}
  </select>
);

export default SelectInput;
