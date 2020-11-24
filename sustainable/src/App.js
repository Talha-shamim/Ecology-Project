import React, { Component } from 'react';
import { loremIpsum } from "lorem-ipsum";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Sustainable from './components/sustainable/sustainable';
import Resources from './components/resources/resources';
import Solar from './components/renewable/solar/solar';
import Wind from './components/renewable/wind/wind';
import Hydro from './components/renewable/hydro/hydro';
import Geothermal from './components/renewable/geothermal/geothermal';
import Complaint from './components/complaint/complaint';
import Blogs from './components/blogs/blogs';
import Footer from './components/footer/footer';
import CreateBlog from './components/create-blog/create-blog';
import Birds from './components/birds/birds';
import Airfront from './components/airquality/airfront';
import tree from './components/tree-animation/tree';
import Sdg from './components/sdg';
import Sdg1 from './components/sdg1';
import Sdg2 from './components/sdg2';
import Sdg3 from './components/sdg3';
import Sdg4 from './components/sdg4';
import Sdg5 from './components/sdg5';
import Sdg6 from './components/sdg6';
import Sdg7 from './components/sdg7';
import Sdg8 from './components/sdg8';
import Sdg9 from './components/sdg9';
import Sdg10 from './components/sdg10';
import Sdg11 from './components/sdg11';
import Sdg12 from './components/sdg12';
import Sdg13 from './components/sdg13';
import Sdg14 from './components/sdg14';
import Sdg15 from './components/sdg15';
import Sdg16 from './components/sdg16';
import Sdg17 from './components/sdg17';
import cityapi from './components/city-api/city-api';


export default class App extends Component {
  render() {
    return (
      <div className="app-div">

        

        <switch>
          <Route path="/" exact component={Sustainable} />
         <Route path="/" exact component={Resources}/>
          <Route path='/' exact component={Complaint}/> 
          <Route path="/" exact component={Footer} />
          <Route path='/blog' exact component={Blogs}/>
          <Route path="/solar" exact component={Solar}/>
          <Route path="/birds" exact component ={Birds}/>
          <Route path="/wind" exact component={Wind}/>
          <Route path="/hydro" exact component={Hydro}/>
          <Route path="/geothermal" exact component={Geothermal}/>
          <Route path="/create-blog" exact component={CreateBlog}/>
          <Route path="/air-api" exact component={Airfront}/>
          <Route path="/susgoals" exact component={Sdg} />
          <Route path="/Sdg1" exact component={Sdg1}/>
          <Route path="/Sdg2" exact component={Sdg2}/>
          <Route path="/Sdg3" exact component={Sdg3}/>
          <Route path="/Sdg4" exact component={Sdg4}/>
          <Route path="/Sdg5" exact component={Sdg5}/>
          <Route path="/Sdg6" exact component={Sdg6}/>
          <Route path="/Sdg7" exact component={Sdg7}/>
          <Route path="/Sdg8" exact component={Sdg8}/>
          <Route path="/Sdg9" exact component={Sdg9}/>
          <Route path="/Sdg10" exact component={Sdg10}/>
          <Route path="/Sdg11" exact component={Sdg11}/>
          <Route path="/Sdg12" exact component={Sdg12}/>
          <Route path="/Sdg13" exact component={Sdg13}/>
          <Route path="/Sdg14" exact component={Sdg14}/>
          <Route path="/Sdg15" exact component={Sdg15}/>
          <Route path="/Sdg16" exact component={Sdg16}/>
          <Route path="/Sdg17" exact component={Sdg17}/>
          <Route path="/cityapi" exact component={cityapi}></Route>
        </switch>
        
      </div>        
    )
  }
}
