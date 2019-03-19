import React, { Component } from "react";
import {Link} from 'react-router-dom';
// import logo from "../logo.svg";
import "../css/App.css";
import "../css/animated.css"

// import Croquis from './Croquis'

class App extends Component {
  render() {
    // document.getElementById('body').style.backgroundImage="../img/cbtis130.png/";
    return (
        <div className="App">
          <h1 className="animated fadeInUp retraso-1">Bienvenido al recorrido virtual por el CBTis #130</h1>
          <Link to={"/Croquis"}><button type="button" className="btn btn-success animated rollIn retraso-2">Comenzar</button></Link>
        </div>

      
      
     
    );
  }
}

export default App;
