import { FETCH_AUTH_TOKEN } from "../constants";

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_AUTH_TOKEN:
            return { ...state, authToken : "2|sEF0bzRUF31012MRvUQRaCwIImzVv4p6hlzKi4YH" }
        default:
            return state;
    }
}

export default authReducer;
