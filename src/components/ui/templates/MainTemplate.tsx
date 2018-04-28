import * as React from "react";
import PageHeader from "../organisms/pageHeader/PageHeader";

const MainTemplate = ({children}) => (
    <div className="container">
        <PageHeader/>
        {children}
    </div>
);

export default MainTemplate;