import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReduser";

const INITIAL_STATE = {
    user: {

        _id: "64e7668d30769422b3a1e3a2",
        username: "test",
        profilePicture:"/assets/person/5.jpg",
        email: "test@guf.com",
        coverPicture: "",
        followers: [],
        followings: [],
        isAdmin: false,
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
        
    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}