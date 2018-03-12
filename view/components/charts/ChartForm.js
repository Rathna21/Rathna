import React from 'react';
import axios from "axios/index";
import {Line} from 'react-chartjs-2';
var createReactClass = require('create-react-class');




    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [100, 80, 90, 81, 77, 67, 87]
            }
        ]
    };

export default class ChartForm  extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            networkname : '',

        }
        this.onChange =this.onChange.bind(this);
        this.handleClick =this.handleClick.bind(this);
    }
    onChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }
    handleClick(e){
        e.preventDefault();




    }

    render() {
        return (


            <form>

                <div className= "form-group">
                    <label className= "control-label">Network Name</label>
                    <input value={this.state.networkname} onChange={this.onChange }
                           type="text"
                           name= "networkname"
                           className = "form-control"/>
                </div>



                <div className= "form-group">
                    <button className= "btn btn-primary btn-lg" onClick={this.handleClick}>Submit</button>
                </div>
                <h2>Line Example</h2>
                <Line data={data}/>
            </form>
        );
    }
};



