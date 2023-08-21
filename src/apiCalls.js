import axios from "axios";
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../src/context/AuthActions"

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: LOGIN_START });
    //console.log("dispatch");
    try {
        const res = await axios.post("/auth/login", userCredential);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        //console.log(res.data);
    } catch (err) {
        //console.log(err);
        dispatch({ type: LOGIN_FAILURE, payload: err });
    }
};