import React, { Component } from 'react'
import '../Css/Login.css'

export class Login extends Component {
    render() {
        return (
            <div className="login-form">
                <form>
                    <h1 className="title">Login</h1>
                    <label className="username">UserName:</label><br />
                    <input type="text" name="username" />
                    <hr></hr>
                    <label className="password">Password:</label><br />
                    <input type="password" name="password" />
                    <hr></hr>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login
