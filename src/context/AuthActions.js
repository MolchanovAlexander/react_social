export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"


export const LoginStart = ()=>({
    type:LOGIN_START,
})
export const LoginSucces = (user)=>({
    type:LOGIN_SUCCESS,
    payload: user
})
export const LoginFailure = (error)=>({
    type:LOGIN_FAILURE,
    payload: error
})
export const Follow = (userId)=>({
    type:FOLLOW,
    payload: userId
})
export const Unfollow = (userId)=>({
    type:UNFOLLOW,
    payload: userId
})