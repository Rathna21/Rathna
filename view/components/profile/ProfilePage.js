import React from 'react';
import Navigation from '../Navigation';
import ProfileForm from "./ProfileForm";


class ProfilePage extends React.Component {



    render(){
        return(
            <div className= "container">

                <Navigation />
                <h1>Profile Page</h1>
                <ProfileForm/>

            </div>


        );
    }
}

export default ProfilePage;