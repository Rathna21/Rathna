import React from 'react';
import axios from 'axios';


export default class ProfileForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userData : []
        }
        this.handleClick =this.handleClick.bind(this);
    }

    render() {

        let userData = this.state.userData;

        userData = userData.map(function (data, index) {

            return(
                <ul>

                    <li key={index}>
                        <label >Username : </label>  {userData[index].username}
                    </li>

                    <li key= {index}>
                        <label >Email : </label>  {userData[index].email}
                    </li>

                </ul>

            );
        });

        return (

        <div id="container">

            <form>

                <div className= "form-group">
                    <button className= "btn btn-primary btn-lg" onClick={this.handleClick}>Submit</button>
                </div>

            </form>

            <ul id="profile">
                {userData}
            </ul>

        </div>



        );
    }

    handleClick(e){
        e.preventDefault();

        axios.get('http://localhost:3000/api/profile?email='+'rathnasrinivas95@gmail.com').then(function (data) {
            let user = [];
            let userObj = {};
            for(let c = 0; c < data.data.length; c++)
            {
                userObj["username"] = data.data[0].username;
                userObj["email"] = data.data[0].email;
            }
            user.push(userObj);
            return user;
        }).then( json => {
            this.setState({
                userData : json
            });
        });
    }
};

