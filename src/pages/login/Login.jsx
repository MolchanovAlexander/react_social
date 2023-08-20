// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Topbar from "../../components/topbar/Topbar";
import { useContext, useRef } from 'react';
import './login.css'
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';


export default function Login() {
    const email = useRef()
    const password = useRef()
    const { user, isFetching, error, dispatch } = useContext(AuthContext)
    
    const handleClick = (e) => {
        e.preventDefault()
        loginCall({email: email.current.value, password: password.current.value }, dispatch)
        
        
    }
    console.log( isFetching);
    return (
        <>

            <div className="loginContainer">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">LamaSocial</h3>
                        <span className="loginDesc">
                            connect with the friendsand the world around you on LamaSocial
                        </span>
                    </div>
                    <div className="loginRight">
                        <form className="loginBox" onSubmit={handleClick}>
                            <input
                                type="email"
                                placeholder="Email"
                                className="loginInput"
                                required
                                ref={email} />
                            <input
                                type="password"
                                placeholder="Password"
                                className="loginInput"
                                required
                                minLength={6}
                                ref={password} />
                            <button className="loginButton">{isFetching+ "Log In"}</button>
                            <span className="loginForgot">Forgot Password?</span>
                            <button className="loginRegisterButton">Create a New Account</button>
                        </form>
                    </div>
                </div>

            </div>

        </>



    );
}

