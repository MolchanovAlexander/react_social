// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Topbar from "../../components/topbar/Topbar";
import './register.css'


export default function Register() {
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
                            <input placeholder="Username" className="loginInput" />
                            <input placeholder="Email" className="loginInput" />
                            <input placeholder="Password" className="loginInput" />
                            <input placeholder="Repeat the password " className="loginInput" />
                            <button className="loginButton">Sign Up</button>
                            <button className="loginRegisterButton">Log into Account</button>
                        </div>
                    </div>
                </div>

            </div>

        </>



    );
}

