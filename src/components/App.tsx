import * as React from "react";
import "./ui/styl/App.styl";

import CheckoutPage from "./ui/pages/CheckoutPage";

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <CheckoutPage/>
            </div>
        );
    }
}
