import * as React from "react";
import "./../assets/scss/App.scss";

import CheckoutPage from "./ui/pages/Checkout";

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
              <CheckoutPage />
            </div>
        );
    }
}
