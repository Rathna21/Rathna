import React from 'react';
import Navigation from '../Navigation';
import ProfileForm from "./ProfileForm";
import {browserHistory} from "react-router";


class ProfilePage extends React.Component {



    render(){
        return(
            <div className= "container">
                <Navigation />
                <ProfileForm/>
            </div>


        );
    }
}

export default ProfilePage;