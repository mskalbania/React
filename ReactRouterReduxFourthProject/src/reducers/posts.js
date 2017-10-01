import {FETCH_POST, FETCH_POSTS} from "../actions/index";

const INITIAL_STATE = {all: [], selected: null};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, all: action.payload.data}
        case FETCH_POST:
            return {...state, selected: action.payload.data}
        default:
            return state;
    }
}