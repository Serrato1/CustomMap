import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Logo from './sumi-logo.png'
import './login.css'
class Login extends Component{
    render(){
        return(
            <div className='login-container'>
                <img class='logo-container' src={Logo}>
                </img>
                <form className='form-container'>
                    <input type='text' placeholder='USERNAME'></input>
                    <input type='password' placeholder='PASSWORD'></input>
                    <NavLink to='/home' className='button'>NEXT</NavLink>
                </form>
            </div>
        )
    }
}

export default Login;