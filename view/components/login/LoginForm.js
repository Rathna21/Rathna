import React from 'react';
//const UserData = require('../model/userData');
//import UserData from '../../model/userData';
const http = require('http');
import { browserHistory } from 'react-router';


class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
        this.onChange =this.onChange.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        fetch("/api/signup?email="+ this.state.email +"&password=" + this.state.password).then(function (data) {

            console.log(data.json());
            });
    }


    handleClick(e){
        e.preventDefault();

        browserHistory.push('/charts');
    }



    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>

                <div className= "form-group">
                    <label className= "control-label">Email</label>
                    <input value={this.state.email} onChange={this.onChange }
                           type="text"
                           name= "email"
                           className = "form-control" />
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
