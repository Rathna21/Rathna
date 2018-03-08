import React from 'react';
import Navigation from '../Navigation';


class HomePage extends React.Component {
    render(){
        return(
            <div className= "container">

                <Navigation />
                <h1>Home Page</h1>
            </div>


        );
    }
}

export default HomePage;