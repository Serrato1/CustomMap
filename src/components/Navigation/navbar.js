import React , {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom';

import './navbar.css';
class Navbar extends Component{
  render(){
    return(
      <div className='navbar-container'>
        <NavLink to='/filter' className='button-container'>
          <FontAwesomeIcon icon= 'filter'/>
        </NavLink>
        <NavLink to='/profile' className='button-container'>
          <FontAwesomeIcon icon= 'user-tie'/>
        </NavLink>
        <NavLink to='/' className='button-container'>
          <FontAwesomeIcon icon= 'circle-notch' id='notch'/>
        </NavLink>
        <NavLink to='/' className='button-container'>
          <FontAwesomeIcon icon= 'search' />
        </NavLink>
        <NavLink to='/' className='button-container'>
          <FontAwesomeIcon icon= 'ellipsis-h' />
        </NavLink>
      </div>
    )
  }
}

export default Navbar;

/*
        <Map coord= {{ lat : 33.4484, lng: -112.0740 }} zoom= {10}>
          <Marker key={5} long={-112.0740} lat={33.4484} icon={''} onClick={()=>{this.handleMapClick()}}/>
          <Marker key={5} long={300} lat={500} icon={''}/>
        </Map>
*/