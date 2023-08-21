import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { CircularProgress } from '@mui/material';
import { useContext, useRef } from 'react';
import './login.css'
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF0033',
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: purple,
    },
});

export default function Login() {
    const email = useRef()
    const password = useRef()
    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault()
        loginCall({ email: email.current.value, password: password.current.value }, dispatch)


    }
    // console.log( isFetching);
    return (
        <>

            <div className="loginContainer">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">LamaSocial</h3>
                        <span className="loginDesc">
                            connect with the friends and the world around you on LamaSocial
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
                            {/*           MATERIAL UI COLOR throw theme only way is  */}
                            <button disabled={isFetching} className="loginButton">
                                {isFetching
                                ? <ThemeProvider theme={theme}>
                                    <CircularProgress color="primary" />
                                </ThemeProvider>
                                : "Log In"}
                                </button>
                            <span className="loginForgot">Forgot Password?</span>
                            <button disabled={isFetching} className="loginRegisterButton">
                            {isFetching
                                ? <ThemeProvider theme={theme}>
                                    <CircularProgress color="secondary" />
                                </ThemeProvider>
                                : "Create a New Account"}
                                </button>
                        </form>
                    </div>
                </div>

            </div>

        </>



    );
}

