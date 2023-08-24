// import Feed from "../../components/feed/Feed";
// import RightbuseHistoryar from "../../components/rightbar/Rightbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Topbar from "../../components/topbar/Topbar";
import { useRef ,} from 'react';
import{ useNavigate} from "react-router"
import './register.css'
import axios from 'axios';


export default function Register() {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()

    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        console.log(passwordAgain.current.value, "rn",password.current.value);
        if (passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("Passwords do not match!")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                await axios.post("/auth/register", user)
                navigate("/login")
            } catch (err) {
                console.log(err)
            }

        }
        //loginCall({ email: email.current.value, password: password.current.value }, dispatch)


    }
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
                                required
                                type='text'
                                placeholder="Username"
                                ref={username}
                                className="loginInput"
                            />
                            <input
                                required
                                type='email'
                                placeholder="Email"
                                ref={email}
                                className="loginInput"
                            />
                            <input
                                required
                                minLength={6}
                                type='password'
                                placeholder="Password"
                                ref={password}
                                className="loginInput"
                            />
                            <input
                                required
                                type='password'
                                placeholder="Repeat the password"
                                ref={passwordAgain}
                                className="loginInput"
                            />
                            <button className="loginButton" type='submit'>Sign Up</button>
                            <button className="loginRegisterButton">Log into Account</button>
                        </form>
                    </div>
                </div>

            </div>

        </>



    );
}

