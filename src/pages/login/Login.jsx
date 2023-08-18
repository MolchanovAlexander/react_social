// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Topbar from "../../components/topbar/Topbar";
import './login.css'


export default function Login() {
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
                        <div className="loginBox">
                            <input placeholder="Email" className="loginInput" />
                            <input placeholder="Password" className="loginInput" />
                            <button className="loginButton">Log In</button>
                            <span className="loginForgot">Forgot Password?</span>
                            <button className="loginRegisterButton">Create a New Account</button>
                        </div>
                    </div>
                </div>
                
            </div>

        </>



    );
}

