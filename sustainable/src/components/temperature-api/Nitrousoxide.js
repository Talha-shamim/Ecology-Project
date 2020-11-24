import React from 'react';
import './App.css';

class NitrousOxide extends React.Component{
    
    state = {
        conc : [],
        info : {}
    }

    componentDidMount(){
        
        fetch("https://global-warming.org/api/nitrous-oxide-api")
        .then(res => res.json())
        .then((data) => {
            const newConc = data.nitrous;
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
                <h1>The current amount of Nitrous Oxide in the atmosphere is about {this.state.info.average}{""} ppm</h1>
            </div>
        );
    }
}
export default NitrousOxide;