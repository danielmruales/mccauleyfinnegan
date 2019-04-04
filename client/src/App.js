import React, { Component } from 'react';
import Navbar from './Navbar/Navbar.js'
import Home from './Home/Home.js'
import Footer from './Footer/Footer.js'
import {Switch, Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
