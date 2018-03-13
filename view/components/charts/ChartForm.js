import React from 'react';
import axios from "axios/index";
import {Line} from 'react-chartjs-2';
var createReactClass = require('create-react-class');
import {browserHistory} from 'react-router';






export default class ChartForm  extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            networkname1 : '',
            networkname2 : '',
            chartData   : {}
        }
        this.onChange =this.onChange.bind(this);
        this.handleClick =this.handleClick.bind(this);
    }
    onChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }
    handleClick(e){
        e.preventDefault();
        axios.post("http://localhost:3000/api/getChart",{
            networkName : this.state.networkname1
        }).then(response => {

            const arr1 = response.data;
            let arrData1 = [];
            let labels1 = [];
            for(let i=0; i<arr1.length; i++)
            {
              labels1.push(i+1);
              arrData1.push(arr1[i].signalStrength);
            }

            console.log(arrData1);

            axios.post("http://localhost:3000/api/getChart", {
                networkName : this.state.networkname2
            }).then(response => {


                const arr2 = response.data;
                let arrData2 = [];
                let labels2 = [];
                for(let i=0; i<arr2.length; i++)
                {
                    labels2.push(i+1);
                    arrData2.push(arr2[i].signalStrength);
                }

                console.log(arrData2);

                this.state.chartData = {
                    labels : (labels1.length > labels2.length ? labels1 : labels2),
                    datasets : [{
                            label : this.state.networkname1,
                            data  : arrData1
                        },
                        {
                            label : this.state.networkname2,
                            data  : arrData2
                        }
                    ]
                }

                browserHistory.push('/charts');

            });





        });
    }

    render() {
        return (


            <form>

                <div className= "form-group">
                    <label className= "control-label">Network Name 1</label>
                    <input value={this.state.networkname1} onChange={this.onChange }
                           type="text"
                           name= "networkname1"
                           className = "form-control"/>
                </div>

                <div className= "form-group">
                    <label className= "control-label">Network Name 2</label>
                    <input value={this.state.networkname2} onChange={this.onChange }
                           type="text"
                           name= "networkname2"
                           className = "form-control"/>
                </div>

                <div className= "form-group">
                    <button className= "btn btn-primary btn-lg" onClick={this.handleClick}>Submit</button>
                </div>

                    <Line data = {this.state.chartData} />


            </form>
        );
    }
};


