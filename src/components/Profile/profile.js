import React , {Component} from 'react';
import Navbar from '../Navigation/navbar.js'
import './profile.css'
class Profile extends Component{
  render(){
    return(
        <div>
            <div className='profile-container'>
                <div className='top-banner'>
                    <div className='left'>
                      <span>Noel</span>
                      <span>Serrato</span>
                    </div>
                </div>
                <img className='pic-container' />
                <div className='tabs' >
                    <div className='container-left'>
                        <div></div>
                        <div></div>

                    </div>
                    <div className='container-right'>
                        <div></div>
                        <div></div>

                    </div>

                </div>
            </div>
            <Navbar></Navbar>
        </div>

    )
  }
}

export default Profile;
