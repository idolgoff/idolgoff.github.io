import * as React from "react";
import {isMobile} from "../../constants";

import * as s from "./PageTitle.styl";

const PageTitle = ({
    title,
    mobileTitle = "",
    subtitle = ""
                   }) => {
    if (!mobileTitle) {
        mobileTitle = title;
    }
    return(
        <div>
            <h1>{isMobile ? mobileTitle : title}</h1>
            <p className={s.subtitle}>{subtitle}</p>
        </div>
    );
};

export default PageTitle;