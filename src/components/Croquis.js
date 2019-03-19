import React,{Component} from 'react';
import "../css/App.css";
import croquis_cbtis from "../img/croquis_cbtis.jpeg"
class Croquis extends Component{
    render(){

        // document.getElementById('body').style.backgroundImage="none";
        // Css.insertRule("body{backgroundImage:none}",0);
        
        
        return(
            <div className="croquis ">
               <img src={croquis_cbtis} alt="Imagen del cbtis" className="imgc" />
               
            </div>
        );
    }
}

export default Croquis;