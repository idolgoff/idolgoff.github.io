import * as React from "react";
import TextInput from "../atoms/TextInput";

interface IProps {
  value?: string;
  className?: string;
  placeholder?: string;
  error?: string|null;
  validate?: any;
  ok?: boolean|null;
}

export default class TextField extends React.Component<IProps, {}> {

  keyDownHandler = e => {
    const {validate = null} = this.props;
    const value = e.key;
    if (validate) {
      console.log(validate, e.key, validate.test(e.key));
      if (!validate.test(value)) {
        e.stopPropagation();
        e.preventDefault();        
      }
    }
  }

  render() {
      const {
        className = "",
        error = null,
        ok = null,
        ...rest
      } = this.props;

    const fullClass = `textField ${className} ${error ? "error" : ""}`;
      return (
        <div className={fullClass}>
          <TextInput
            onKeyDown={this.keyDownHandler}
            {...rest}
          />
          {error && <div className="error">{error}</div>}
        </div>
    );
  }

}
