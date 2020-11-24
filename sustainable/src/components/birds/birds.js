import React, { Component } from 'react';
import BirdAnimation from './../bird-animation/bird-animation';
import './birds.css'

export default class Birds extends Component {
    render() {
        return (
            <div className="bird-rw">
                <div className="api-button"> <a href="/cityapi">Lest's Get Started</a> </div>
              <div className="animation"> <BirdAnimation/> </div>  
              
                
            </div>
        )
    }
}
