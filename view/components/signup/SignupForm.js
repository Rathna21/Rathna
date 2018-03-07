import React from 'react';
const http = require('http');
import { browserHistory} from 'react-router';
import axios from 'axios';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email : '',
            password : '',
            confirmpassword : ''
        }

        this.onChange =this.onChange.bind(this);

        this.handleClick = this.handleClick.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }




    handleClick(e) {
        e.preventDefault();


        axios.post('http://localhost:2000/api/signup', {
            username: this.state.username,
            email : this.state.email,
            password : this.state.password
        })
            .then(response => {
                console.log(response, 'Signature added!');
            })
            .catch(err => {
                console.log(err, 'Signature not added, try again');
            });

        browserHistory.push('/login');
    }



    render() {
        return (
           <form >
                <h1>Join US!!</h1>

               <div className= "form-group">
                   <label className= "control-label">Username</label>
                   <input value={this.state.username} onChange={this.onChange }
                       type="text"
                       name= "username"
                       className = "form-control" />
               </div>

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
                   <label className= "control-label">Confirm Password</label>
                   <input value={this.state.confirmpassword} onChange={this.onChange }
                          type="password"
                          name= "confirmpassword"
                          className = "form-control" />
               </div>


               <div className= "form-group">
                   <button className= "btn btn-primary btn-lg" onClick={this.handleClick}>Sign Up</button>
               </div>



           </form>
        );
    }
}


export default SignupForm;