import React, { Component } from 'react';
import './tree.css';
import Stubble_Burning from './stubble-burning.jpg';
import Air_Pollution from './200.gif';
import Health_Issues from './health-issues.jpg';
import Soil from './soil.jpg';
import Farmer from './farmer.jpg';
import Fertilizer from './fertilizer.jpg';
import Food_Quality from './food_quality.jpg';

export default class Tree extends Component {
    render() {
        return (
            <div class="tree">
                <ul>
                    <li>
                        <a href="#">
                            <div className = "container">
                                <img className = "image"src = {Stubble_Burning} alt = "Stubble burning"></img>
                                <div className = "overlay">
                                    <div className = "text">Stubble Burning</div>
                                </div>
                            </div>
                        </a>
                        <ul>
                            <li>
                                <a href="#">
                                    <div className = "container">   
                                        <img className = "image"src = {Air_Pollution} alt = "Air Pollution"/>
                                        <div className = "overlay">
                                            <div className = "text">Air Pollution</div>
                                        </div>
                                    </div>
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">
                                        <div className = "container"> 
                                            <img className = "image"src = {Health_Issues} alt = "Health Issues"/>
                                            <div className = "overlay">
                                                <div className = "text">Health Issues</div>
                                            </div>
                                        </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <div className = "container"> 
                                        <img className = "image"src = {Soil} alt = "Loss of moisture and useful microbes"/>
                                        <div className = "overlay">
                                            <div className = "text">Loss of moisture and useful microbes</div>
                                        </div>
                                    </div>
                                </a>
                                <ul>
                                    <li><a href="#">
                                        <div className = "container"> 
                                            <img className = "image"src = {Farmer} alt = "Loss to farmer"/>
                                            <div className = "overlay">
                                                <div className = "text">Loss to Farmers</div>
                                            </div>
                                        </div>
                                    </a></li>
                                    <li>
                                        <a href="#">
                                            <div className = "container"> 
                                                <img className = "image"src = {Fertilizer} alt = "Use of fertilizers"/>
                                                <div className = "overlay">
                                                    <div className = "text">Use of fertilizers</div>
                                                </div>
                                            </div>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <div className = "container">
                                                        <img className = "image"src = {Food_Quality} alt = "Food Quality"/>
                                                        <div className = "overlay">
                                                            <div className = "text">Drop in Food Quality</div>
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
            </div>
        )
    }
}