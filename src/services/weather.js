import axios from "axios";

import { API_URL, API_KEY, UNIT } from "../constants";

export const getWeatherData = (location) => {
    return axios.get(API_URL, {
        params: {
            q: location,
            appid: API_KEY,
            units: UNIT,
        },
    });
};
