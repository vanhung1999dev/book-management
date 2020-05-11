// import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(2),
//       width: '25ch',
//     }
//   },
// }));

// class Login extends Component() {
//   // const classes = useStyles();

//   render() {
//     return (
//       <div>
//         <h1>Dang Nhap</h1>
//         <TextField id="username" label="Username" /><br></br>
//         <TextField id="password" label="Password" /><br></br>
//         <Button variant="contained" color="primary">Login</Button>
//       </div>
//     )
//   }
// }

// export default Login;
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../Css/login.css';
import Axios from 'axios';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  login = async () => {
    const { username, password } = this.state;
    const respond = await Axios.post('http://localhost:3000/login', { username, password });
        console.log('res:', respond);
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.login();
}


  render() {
    return (
      <div className="login-form">
        <h1>Dang Nhap</h1>
        <TextField name="username" label="Username" onChange={this.handleInput} /><br></br><br></br>
        <TextField name="password" label="Password" onChange={this.handleInput} /><br></br><br></br>
        <Button variant="contained" color="primary" onClick={this.handleLogin} >
          Login
        </Button>
      </div>
    )
  }
}

export default Login
