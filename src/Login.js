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
    var apiBaseUrl = '/api/prod/aboveline_jr_test_service';
    var payload={
      username: this.state.username,
      password: this.state.password
    }
    axios.post(apiBaseUrl, payload)
      .then(function (response) {
        console.log(response);
        if(response.data.code === 200){
          console.log("Login successfull");
        }
        else if(response.data.code === 204){
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
  onChangeUserName(event) {
    this.setState({username: event.target.value});
  }
  onChangePassword(event) {
    this.setState({password: event.target.value}); 
  }
  render() {
    return (
      <div className="Login-window">
         <input type="text"
           placeholder="Username" onChange = {this.onChangeUserName.bind(this)}
           />
         <br/>
         <input
           type="password"
           placeholder="Password"
           onChange = {this.onChangePassword.bind(this)}
           />
         <br/>
         <input type="button" value="Login" style={style} onClick={(event) => this.handleClick(event)}/>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;