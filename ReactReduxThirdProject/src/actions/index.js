import axios from 'axios';

const API_KEY = '09dd33c8c562797427428bc1d5598f3a';
const ROOT_URL = `https:\\api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const LOG_STATE = 'LOG_STATE';
export const CLEAR_STATE = 'CLEAR_STATE';


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},pl`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

export function logStateToConsole() {
    return {
        type: LOG_STATE
    }
}

export function clearState() {
    return {
        type: CLEAR_STATE
    }
}