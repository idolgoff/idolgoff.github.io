import * as React from "react";

const formHoc = props => Component => {
    return (
        <Component
            value={props.values[props.id]}
            error={props.errors[props.id] && props.touched[props.id] ? props.errors[props.id] : ""}
            ok={props.values[props.id] && !props.errors[props.id]}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            {...props}
        />
    );
};

export default formHoc;