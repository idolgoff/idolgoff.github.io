import * as React from "react";
import PageHeader from "../organisms/pageHeader/PageHeader";

/**
 * The simplest template with just one header
 */
const MainTemplate = ({children}) => (
    <div className="container">
        <PageHeader/>
        {children}
    </div>
);

export default MainTemplate;