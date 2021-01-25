import { setItem } from "../services/storage";

export const SET_USERNAME = "SET_USERNAME";
export const SET_LOCATION = "SET_LOCATION";
export const SET_WEATHER = "SET_WEATHER";

export const updateUsername = (dispatch, username) => {
    dispatch({
        type: SET_USERNAME,
        payload: username,
    });
    setItem("username", username);
};

export const updateLocation = (dispatch, location) => {
    dispatch({
        type: SET_LOCATION,
        payload: location,
    });
    setItem("location", location);
};

export const updateWeatherData = (dispatch, data, date) => {
    dispatch({
        type: SET_WEATHER,
        payload: {
            data,
            date,
        },
    });
    setItem("weather", {
        data,
        date,
    });
};
