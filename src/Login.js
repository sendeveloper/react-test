import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }
  handleClick(event){
    var apiBaseUrl = 'http://localhost:4000/api/';
    var self = this;
    var payload={
      "email":this.state.username,
      "password":this.state.password
    }
    axios.post(apiBaseUrl+'login', payload)
      .then(function (response) {
        console.log(response);
        if(response.data.code == 200){
          console.log("Login successfull");
        }
        else if(response.data.code == 204){
          console.log("Username password do not match");
          alert("username password do not match")
        }
        else{
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="Login-window">
         <input
           placeHolder="Username" onChange = {(event,newValue) => this.setState({username:newValue})}
           />
         <br/>
         <input
           type="password"
           placeHolder="Password"
           onChange = {(event,newValue) => this.setState({password:newValue})}
           />
         <br/>
         <input type="button" value="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;