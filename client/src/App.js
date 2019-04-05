import React, { Component } from 'react';
import Home from './Home/Home.js'
import Admin from './Admin/Admin.js'
import Pictures from './Admin/Pictures/Pictures.js'
import Sub from './Admin/Submissons/Sub.js'
import Footer from './Footer/Footer.js'
import {Switch, Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route  path='/admin' component={Admin}/>
          <Route path='/pictures' component={Pictures}/>
          <Route path='/submissons' component={Sub}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
