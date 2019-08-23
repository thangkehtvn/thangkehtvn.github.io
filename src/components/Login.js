import React from 'react'
import { Link } from '@material-ui/core';
import './Login.css'
const Login = () => {
    return (
        <div className="bg-content" action="/">
                <form className="login-form">
                    <h1>Login</h1>
                    <div className="txtb">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="txtb">
                        <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" className="logbtn" value="Login" />
                    <div className="bottom-text">
                        Don't have account? <Link href="/">Sign Up</Link>
                    </div>
                </form>
        </div>
    )
}

export default Login
