import React, {useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import Axios from 'axios';
import '../Css/login.css';

const OtherLogin = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const history = useHistory();
    const handleLogin = async () => {
        const respond = await Axios.post('http://localhost:3000/login', { username, password });
        console.log('res:', respond);
        if (respond.status === 200) {
            localStorage.setItem('isLogin', true);
            localStorage.setItem('jwt', respond.data);
            history.push('/');
        }
    }

    return (
        <div>
            <div className="login-form">
                <h1>Dang Nhap</h1>
                <TextField name="username" label="Username" onChange={handleUsername} /><br></br><br></br>
                <TextField name="password" label="Password" onChange={handlePassword} /><br></br><br></br>
                <Button variant="contained" color="primary" onClick={handleLogin} >
                    Login
                 </Button>
            </div>
        </div>
    )
}

export default OtherLogin
