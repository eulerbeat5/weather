import "./content-page.scoped.css";

import { useContext, useEffect, useState } from "react";

import AppContext from "../../store";
import { updateWeatherData } from "../../store/actions";

import { Grid } from "@material-ui/core";

const ContentPage = () => {
    const { state, dispatch } = useContext(AppContext);

    const { username, location } = state;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        updateWeatherData(dispatch, location.toLowerCase(), new Date());
    });

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
