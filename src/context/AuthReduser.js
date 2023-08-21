import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./AuthActions"

const AuthReducer = (state, action) => {
    console.log(action.type+ " log");
    console.log(state.isFetching+ " log");
    switch (action.type) {
        case LOGIN_START:
            return {
                user: null,
                isFetching: true,
                error: false
            }
        case LOGIN_SUCCESS:
            return {
                user: action.payload,
                isFetching: false,
                error: false
            }
        case LOGIN_FAILURE:
            return {
                user: null,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default AuthReducer;