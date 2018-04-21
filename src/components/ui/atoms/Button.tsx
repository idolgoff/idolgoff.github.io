import * as React from "react";

const Button = ({
  children = null,
  primary = false,
  className = "",
  onClick,
}) => {
  // console.log("primary", primary);
  return(
    <button className={`${className} ${primary ? "primary" : ""}`}>{children}</button>
  );
};

export default Button;
