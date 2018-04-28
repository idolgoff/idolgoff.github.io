import * as React from "react";
import "./ui/styl/App.styl";

import CheckoutPage from "./ui/pages/CheckoutPage";

export default class App extends React.Component<{}, undefined> {
    render() {
        return (
            <div className="app">
                <CheckoutPage/>
            </div>
        );
    }
}
