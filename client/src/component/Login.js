import React, { Component } from 'react'
import Axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            errorUserName: '',
            errorPassword: ''
        }
    }

    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    isValidateField = () => {
        // const emptyPattern = new RegExp('^(\s)+$');
        // console.log('pattern', emptyPattern);
        if (this.state.username === '' && this.state.password === '') {
            this.setState({ errorUserName: 'username not be empty', errorPassword: 'password not be emtpy' });
            return false;
        } else if (this.state.username === '') {
            this.setState({ errorUserName: 'username not be empty' });
            return false;
        } else if (this.state.password === '') {
            this.setState({ errorPassword: 'password not be emtpy' })
        } else return true;
    }

    login = async () => {
        const { username, password } = this.state;
        // const info = { username, password };
        const respond = await Axios.post('http://localhost:3000/login', { username, password });
        console.log('res:', respond);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.login();

    }

    render() {
        return (
            <div className="login-form">
                <form>
                    <h1 className="title">Login</h1>

                    <div style={{ color: "orange", fontSize: 25 }}>{this.state.errorUserName}</div>
                    <label className="username">UserName:</label><br />
                    <input type="text" name="username" onChange={this.handleInput} />
                    <hr></hr>

                    <div style={{ color: "orange", fontSize: 25 }}>{this.state.errorPassword}</div>
                    <label className="password">Password:</label><br />
                    <input type="password" name="password" onChange={this.handleInput} />
                    <hr></hr>

                    <button onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;