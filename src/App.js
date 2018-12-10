import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import Home from './components/Home/home.js'
import PropertyModal from './components/Modal/property_modal.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Login from './components/Login/login.js'
import Profile from './components/Profile/profile.js';
import Filter from './components/Filter/filter.js'
import { faStroopwafel , faEllipsisH , faSearch , faCircleNotch , faUserTie , faFilter} from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel,faEllipsisH,faSearch , faCircleNotch , faUserTie , faFilter)

class App extends Component {
  state = {
    modal : false
  }
  render() {
    return (
      <BrowserRouter basename='/'>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/home' component = {Home} />
          <Route exact path='/profile' component={Profile}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
