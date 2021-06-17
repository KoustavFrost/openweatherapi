import axios from "axios";

export const getTemperatureApi = ({ q, appid, units }) => {
    const URL = `http://api.openweathermap.org/data/2.5/weather`;
    return axios(URL, {
        method: 'GET',
        params: {
            q: q,
            appid: appid,
            units: units
        },
    })
        .then(response => response)
        .catch(error => {
            throw error;
        });
};