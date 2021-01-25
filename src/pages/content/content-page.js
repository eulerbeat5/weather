import "./content-page.scoped.css";

import { useContext } from "react";

import AppContext from "../../store";

import { Grid } from "@material-ui/core";

const ContentPage = () => {
    const { state, dispatch } = useContext(AppContext);

    const { username, location } = state;

    return (
        <Grid container justify="center" alignItems="center">
            <div className="content-panel">
                <p className="title">Hi, {username}</p>
                <p className="message">
                    Weather forecast: {location} for the next 5 days
                </p>
                <div className="panels">qwer</div>
            </div>
        </Grid>
    );
};

export default ContentPage;
