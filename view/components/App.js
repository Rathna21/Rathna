import React from 'react';
import Navigation from './Navigation';


 export default class App extends React.Component  {
    render(){
        return (
            <div className = "container">
                <h1> Hello Ratzz!!!</h1>
            <Navigation />
                {this.props.children}
            </div>
        );
    }

}

