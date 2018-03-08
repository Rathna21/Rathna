import React from 'react';
const http = require('http');
import { browserHistory } from 'react-router';
import axios from 'axios';


class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
        this.onChange =this.onChange.bind(this);
        this.handleClick =this.handleClick.bind(this);
    }
    onChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }


    handleClick(e){

        e.preventDefault();



        axios.get("http://localhost:3000/api/signup?email="+ this.state.email +"&password=" + this.state.password).then(response => {
            console.log(response);
            if(response.data.length == 1)
                browserHistory.push('/charts');
            else
                alert('Invalid email or password');
           }).catch(err => {
                alert('OOPS! Network error. Please try again later');
           });

    }



    render(){
        return (
            <form>
                <h1>Login</h1>

                <div className= "form-group">
                    <label className= "control-label">Email</label>
                    <input value={this.state.email} onChange={this.onChange }
                           type="text"
                           name= "email"
                           className = "form-control"/>
                </div>

                <div className= "form-group">
                    <label className= "control-label">Password</label>
                    <input value={this.state.password} onChange={this.onChange }
                           type="password"
                           name= "password"
                           className = "form-control" />
                </div>

                <div className= "form-group">
                    <button className= "btn btn-primary btn-lg" onClick={this.handleClick}>Login</button>
                </div>

                 <h4>Are you a new user?
                           <a href = '/signup'> Register</a></h4>



            </form>
        );
    }
}

export default LoginForm;
