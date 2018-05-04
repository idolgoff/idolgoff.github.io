import * as React from "react";
import {isMobile} from "../../constants";

import * as s from "./PageHeader.styl";

const scentBirdLogo = require("../../../../assets/img/logo.png");
const scentBirdLogoLg = require("../../../../assets/img/logo_lg.png");

/**
 * Adaptive header
 */
const PageHeader = ({}) => (
    <div>
        <a href="/">
            <img
                src={isMobile ? scentBirdLogo : scentBirdLogoLg}
                className={s.logo}
                alt="logo"
            />
        </a>
    </div>
);

export default PageHeader;