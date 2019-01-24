import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Link } from "react-router-dom"
import { Route } from "react-router-dom"
import Scroll from "./Components/Scroll"
import Header from "./Components/Header"
import Rotate from "./Components/Rotate"



class App extends Component {
  constructor(props){
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Scroll/>
        <Header/>
        <Rotate/>
        <div className="topnav">
            <Link to={`/`}> <button className="backButton" >Back</button> </Link>
            <Link to={`/design`}> <button className="addMovieButton" >Add New Movie Info</button> </Link>
        </div>
      </div>
    );
  }
}

export default App;
