import * as React from "react";
import SelectInput from "../atoms/SelectInput";

interface IProps {
  value: any;
  className?: string;
  error?: string|null;
  placeholder?: string;
  ok?: boolean|null;
}

export default class SelectField extends React.Component<IProps, {}> {

  render() {
    const {
      value = "",
      className = "",
      error = null,
      ...props
    } = this.props;

    const fullClass = `${className} ${error ? "error" : ""}`;
    return (
      <div className={fullClass}>
        <SelectInput value={value} {...props}/>
      </div>
    );
  }
}
