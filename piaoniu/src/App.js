import React, { Component } from 'react';
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';

//import logo from './logo.svg';
//import './App.css';
import Home from './components/home/Home';
import Concerts from './components/pages/GenrePages/Concerts';
import Dramas from './components/pages/GenrePages/Dramas';


class App extends Component {
  render() {
    return (
      <div className="App">
        	<Route path="/home" component={Home}/>
        	<Route path="/concerts" component={Concerts}/>
        	<Route path="/dramas" component={Dramas}/>
        	<Redirect from='/' to="/home" exact/>

      </div>
    );
  }
}

export default App;
