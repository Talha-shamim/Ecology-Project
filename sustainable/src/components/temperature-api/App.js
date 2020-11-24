import React from 'react';
import './App.css';
import Nitrousoxide from './Nitrousoxide';
import Methane from './Methane';
import Globaltemp from './Globaltemp';

class App extends React.Component{
    
    state = {
        conc : [],
        info : {}
    }

    componentDidMount(){
        
        fetch("https://global-warming.org/api/co2-api")
        .then(res => res.json())
        .then((data) => {
            const newConc = data.co2;
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
                <h1>The current amount of CO2 in the atmosphere is about {this.state.info.trend}{""} ppm</h1>
                <Nitrousoxide/>
                <Methane/>
                <Globaltemp/>
            </div>
        );
    }
}
export default App;