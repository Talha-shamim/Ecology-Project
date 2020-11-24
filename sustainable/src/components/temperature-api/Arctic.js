import React from 'react';
import './App.css';

class Artic extends React.Component{
    
    state = {
        conc : [],
        info : {}
    }

    componentDidMount(){
        
        fetch("https://global-warming.org/api/arctic-api")
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
                <h1>The Arctic sea ice extent is  {this.state.info.extent}{""} million sq. km in 2019</h1>
            </div>
        );
    }
}
export default Artic;