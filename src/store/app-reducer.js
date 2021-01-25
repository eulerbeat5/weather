import { SET_USERNAME, SET_LOCATION, SET_WEATHER } from "./actions";
import { getItem } from "../services/storage";

export const initialState = {
    username: getItem("username"),
    location: getItem("location"),
    weather: getItem("weather") || {},
};

export const appReducer = (state, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload,
            };
        case SET_LOCATION:
            return {
                ...state,
                location: action.payload,
            };
        case SET_WEATHER:
            return {
                ...state,
                weather: action.payload,
            };
        default:
            return state;
    }
};

export default appReducer;
