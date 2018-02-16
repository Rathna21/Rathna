import React from 'react';
import Navigation from './Navigation';


 export default class App extends React.Component  {
    render(){
        return (
            <div className = "container">
            <Navigation />
                {this.props.children}
            </div>
        );
    }

}

