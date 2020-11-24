import React, { Component } from 'react';
import './plastic.css';
import Use_Plastics from './use_plastics.gif';
import Garbage_Managment from './garbage_management.gif';
import Plastic_River from './plastic_river.gif';
import Water_Pollution from './water_pollution.gif';
import Burning_Plastic from './burning_plastic.gif';
import Air_Pollution from './200.gif';
import Health_Problems from './health_problems.gif';
import Plastic_Soil from './plastic_soil.gif';
import Lose_Fertility from './soil_fertility.gif';
import Food_Quality from './food_quality.gif';

export default class PlasticTree extends Component {
    render() {
        return (
            <div class="tree">
                <ul>
                    <li>
                        <a href="#">
                            <div className = "container">
                            <img className = "image"src = {Use_Plastics} alt = "Excessive Use of Plastics"></img>
                                <div className = "overlay">
                                    <div className = "text">Excessive use of plastics</div>
                                </div>
                            </div>
                        </a>
                        <ul>
                            <li>
                                <a href="#">
                                    <div className = "container">
                                        <img className = "image"src = {Garbage_Managment} alt = "Poor Garbage Management"></img>
                                        <div className = "overlay">
                                            <div className = "text">Garbage Management</div>
                                        </div>
                                    </div>   
                                </a>   
                                <ul>
                                    <li>
                                        <a href="#">
                                            <div className = "container">
                                                <img className = "image"src = {Plastic_River} alt = "Plastic thrown in rivers and lakes"></img>
                                                <div className = "overlay">
                                                    <div className = "text">Plastic thrown in rivers and lakes</div>
                                                </div>
                                            </div>   
                                        </a>    
                                            
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <div className = "container">
                                                        <img className = "image"src = {Water_Pollution} alt = "Water Pollution"></img>
                                                        <div className = "overlay">
                                                            <div className = "text">Water Pollution</div>
                                                        </div>
                                                    </div>
                                                </a>    
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className = "container">
                                                <img className = "image"src = {Burning_Plastic} alt = "Burning Plastic"></img>
                                                <div className = "overlay">
                                                    <div className = "text">Burning Plastic</div>
                                                </div>
                                            </div>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <div className = "container">
                                                        <img className = "image"src = {Air_Pollution} alt = "Air Pollution"></img>
                                                        <div className = "overlay">
                                                            <div className = "text">Air Pollution</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <div className = "container">
                                                                <img className = "image"src = {Health_Problems} alt = "Health Problems"></img>
                                                                <div className = "overlay">
                                                                    <div className = "text">Health Problems</div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className = "container">
                                                <img className = "image"src = {Plastic_Soil} alt = "Plastic Pollution in soil"></img>
                                                <div className = "overlay">
                                                    <div className = "text">Plastic Pollution in soil</div>
                                                </div>
                                            </div>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <div className = "container">
                                                        <img className = "image"src = {Lose_Fertility} alt = "Soil lose fertility"></img>
                                                        <div className = "overlay">
                                                            <div className = "text">Soil lose fertility</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <div className = "container">
                                                            <img className = "image"src = {Food_Quality} alt = "Food Quality"></img>
                                                                <div className = "overlay">
                                                                    <div className = "text">Food Quality drops</div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>    
                    </li>                
                </ul>
            </div>
        )
    }
}

