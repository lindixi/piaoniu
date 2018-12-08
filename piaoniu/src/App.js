import React, { Component } from 'react';
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';

//import logo from './logo.svg';
//import './App.css';
import Home from './components/home/Home';
import Concerts from './components/pages/GenrePages/Concerts';
import Dramas from './components/pages/GenrePages/Dramas';
import Detail from './components/pages/Detail';


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Switch>
        	<Route path="/home" component={Home}/>
        	<Route path="/home/concerts" component={Concerts}/>
        	<Route path="/home/dramas" component={Dramas}/>
        	<Route path="/detail/:id" component={Detail}/>

				</Switch>
      </div>
    );
  }
}

App = withRouter(App);
export default App;
