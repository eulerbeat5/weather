import "./content-page.scoped.css";

import { useContext, useEffect, useMemo, useState } from "react";

import AppContext from "../../store";
import { getWeatherData } from "../../services/weather";
import { NUM_DAYS, INDEXES } from "../../constants";
import { updateWeatherData } from "../../store/actions";
import { getDateKey } from "../../utils";

import { Grid, LinearProgress } from "@material-ui/core";

const WeatherCard = ({ data }) => {
    const temp = Math.round(data["main"]["temp_max"]);
    const date = new Date(parseInt(data["dt"]) * 1000);

    const weekday = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
    }).format(date);
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
        date
    );
    const day = date.getDate();
    const suffix =
        day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th";
    const year = date.getFullYear();

    return (
        <div className="card">
            <div className="card-background">
                <span className="temperature">{temp}°</span>
            </div>
            <div className="card-text">
                <p className="weekday">{weekday}</p>
                <p className="date">
                    {month} {day}
                    {suffix}, {year}
                </p>
            </div>
        </div>
    );
};

const ContentPage = () => {
    const { state, dispatch } = useContext(AppContext);

    const { username, location, weather } = state;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const nowKey = getDateKey(new Date());
        if (weather.date === nowKey && weather.data) {
            setLoading(false);
        } else {
            getWeatherData(location.toLowerCase())
                .then(({ data }) => {
                    updateWeatherData(dispatch, data["list"], nowKey);
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [weather.date, weather.data, location, dispatch]);

    const data = useMemo(() => {
        // further data processing can be done here
        if (weather.data) {
            return weather.data.filter((item, idx) => INDEXES.includes(idx));
        }
        return [];
    }, [weather.data]);

    return (
        <Grid container justify="center" alignItems="center">
            <div className="content-panel">
                <p className="title">Hi, {username}</p>
                <p className="message">
                    Weather forecast: {location} for the next {NUM_DAYS} days
                </p>
                <div className="panels">
                    {loading && (
                        <div className="loading">
                            <LinearProgress />
                            <LinearProgress color="secondary" />
                        </div>
                    )}
                    {loading ||
                        data.map((item) => (
                            <WeatherCard key={item.dt} data={item} />
                        ))}
                </div>
            </div>
        </Grid>
    );
};

export default ContentPage;
