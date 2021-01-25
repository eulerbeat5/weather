import { setItem } from "../services/storage";

export const SET_USERNAME = "SET_USERNAME";
export const SET_LOCATION = "SET_LOCATION";

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
