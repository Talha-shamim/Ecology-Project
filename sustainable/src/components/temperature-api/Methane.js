import React from 'react';
import './App.css';

class Methane extends React.Component{
    
    state = {
        conc : [],
        info : {}
    }

    componentDidMount(){
        
        fetch("https://global-warming.org/api/methane-api")
        .then(res => res.json())
        .then((data) => {
            const newConc = data.methane;
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
                <h1>The current amount of Methane in the atmosphere is about {this.state.info.average}{""} ppm</h1>
            </div>
        );
    }
}
export default Methane;