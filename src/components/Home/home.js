import React , {Component} from 'react';
import {Map,Marker} from '../GranularMaps/granular-maps.js';
import Navbar from '../Navigation/navbar.js';
import './home.css'
class Home extends Component{
  render(){
    return(
      <div>
        <Map coord= {{ lat : 33.4484, lng: -112.0740 }} zoom= {10} className='map'>
          <Marker key={5} long={-112.0740} lat={33.4484} icon={''} onClick={()=>{this.handleMapClick()}}/>
          <Marker key={5} long={300} lat={500} icon={''}/>
        </Map>
        <Navbar></Navbar>
      </div>
    )
  }
}

export default Home;

/*
        <Map coord= {{ lat : 33.4484, lng: -112.0740 }} zoom= {10}>
          <Marker key={5} long={-112.0740} lat={33.4484} icon={''} onClick={()=>{this.handleMapClick()}}/>
          <Marker key={5} long={300} lat={500} icon={''}/>
        </Map>
*/