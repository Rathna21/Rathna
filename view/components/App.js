import React from 'react';
import Navigation from './Navigation';


 export default class App extends React.Component  {
    render(){
        return (

            <div>
                <h1 align="center" > Welcome to our application Signal Strength!</h1>

            <div className = "container contain">

                {this.props.children}

            </div>
            </div>
        );
    }

}

