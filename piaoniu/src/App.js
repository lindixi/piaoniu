import React, { Component } from 'react';
import axios from 'axios';
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';

//import logo from './logo.svg';
//import './App.css';
import Home from './components/home/Home';
import Concerts from './components/pages/GenrePages/Concerts';
import Dramas from './components/pages/GenrePages/Dramas';
import Detail from './components/pages/Detail';
import Search from './components/pages/Search'
axios.defaults.baseURL='http://localhost:8000';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Switch>
        	<Route path="/home" component={Home}/>
        	<Route path="/home/concerts" component={Concerts}/>
        	<Route path="/home/dramas" component={Dramas}/>
        	<Route path="/detail/:id" component={Detail}/>
        	<Route path="search" component={Search}/>
					<Redirect from="/" to="/home" exact/>
				</Switch>
      </div>
    );
  }
}

App = withRouter(App);
export default App;
