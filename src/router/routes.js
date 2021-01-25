import React from "react";
import { Route, Switch } from "react-router-dom";

import IntroPage from "../pages/intro/intro-page";
import ContentPage from "../pages/content/content-page";

export const Routes = () => {
    return (
        <Switch>
            <Route path="/intro">
                <IntroPage />
            </Route>
            <Route path="/content">
                <ContentPage />
            </Route>
        </Switch>
    );
};
