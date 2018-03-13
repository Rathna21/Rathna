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
                <div align="center" className= "col-md-4 col-md-offset-4 ">

                    <label className="control-label profile">Username  </label>
                    <input className="form-control prof" value={userData[index].username}/><br />

                    <label className="control-label profile">   Email  </label>
                    <input className="form-control prof" value={userData[index].email}/><br/>

                    <label className="control-label profile">   Phone Number  </label>
                    <input className="form-control prof" value={userData[index].phonenumber}/><br/>

                    <label className="control-label profile">   Address  </label>
                    <input className="form-control prof" value={userData[index].address}/><br/>

                    <label className="control-label profile">   City  </label>
                    <input className="form-control prof" value={userData[index].city}/>

                    <label className="control-label profile">   Pincode  </label>
                    <input className="form-control prof" value={userData[index].pincode}/>


                </div>

            );
        });

        return (

        <div id="container">
            <h2 align="center">User Details</h2>

            <form>

                <div className= "form-group" align="center">
                    <button className= "btn btn-default btn-lg" onClick={this.handleClick}>Submit</button>
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

        axios.get('http://localhost:3000/api/profile?email='+'').then(function (data) {
            let user = [];
            let userObj = {};
            for(let c = 0; c < data.data.length; c++)
            {
                userObj["username"] = data.data[0].username;
                userObj["email"] = data.data[0].email;
                userObj["phonenumber"] = data.data[0].phonenumber;
                userObj["address"] = data.data[0].address;
                userObj["city"] = data.data[0].city;
                userObj["pincode"] = data.data[0].pincode;

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

