import {FETCH_WEATHER, LOG_STATE, CLEAR_STATE} from "../actions/index";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return state.concat([action.payload.data]);
        case LOG_STATE:
            console.log(state);
            break;
        case CLEAR_STATE:
            return [];
    }
    return state;
}
