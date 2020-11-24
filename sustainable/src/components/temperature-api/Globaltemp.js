import React from 'react';
import './App.css';

class Globaltemp extends React.Component{
    
    state = {
        conc : [],
        info : {}
    }

    componentDidMount(){
        
        fetch("https://global-warming.org/api/temperature-api")
        .then(res => res.json())
        .then((data) => {
            const newConc = data.result;
            const newInfo = newConc[newConc.length-1];
            const newState = Object.assign({},this.state,{
                conc : newConc,
                info : newInfo
            });
            this.setState(newState);
            console.log(this.state.info);
        })
        .catch(error => console.log(error));
    }

    render(){
        return(
            <div className = "App">
                <h1>The Global temperature change since 1880 is {this.state.info.land}{""} °C</h1>
            </div>
        );
    }
}
export default Globaltemp;