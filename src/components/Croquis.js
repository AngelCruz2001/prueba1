import React,{Component} from 'react';
import "../css/App.css";
import "../css/animated.css"
import croquis_cbtis from "../img/croquis_cbtis.JPG"
class Croquis extends Component{
    render(){
        // document.getElementById('body').style.backgroundImage="none";
        // Css.insertRule("body{backgroundImage:none}",0);
        return(
            <div className="croquis ">
               <img src={croquis_cbtis} alt="Imagen del cbtis" className="imgc animated fadeIn " />
               <div className="titulo animated bounceIn retraso-1">
                   <h3>Selecciona el area que quieras visitar</h3>
               </div>
               {/* fila 1 */}
                <div className="retraso-2 animated fadeIn row">
                    <div className="col-6">
                        <button type="button" className="btn btn-dark btn-block">1.- Edificio "A" y Patio civico</button>
                    </div>
                    <div className="col-sm-6">
                        <button type="button" className="btn btn-dark btn-block">3.- Edificio "C" y jardin</button>
                    </div>
                </div>
                {/* fila 2*/}
                <div className="retraso-2 animated fadeIn row">
                    <div className="col-sm-6">
                        <button type="button" className="btn btn-dark btn-block">2.- Laboratorios de Programacion</button>
                    </div>
                    <div className="col-sm-6">
                        <button type="button" className="btn btn-dark column">4</button>
                    </div>
                </div>
                {/* fila 3 */}
                <div className="retraso-2 animated fadeIn row">
                    <div className="col-sm-6">
                        <button type="button" className="btn btn-dark column">3</button>
                    </div>
                    <div className="col-sm-6">
                        <button type="button" className="btn btn-dark column">6</button>
                    </div>
                </div>
                {/* fila 4 */}
                <div className="retraso-2 animated fadeIn row">
                    <div className="col-sm-6">
                        <button type="button" className="btn btn-dark column">4</button>
                    </div>
                    <div className="col-sm-6">
                        <button type="button" className="btn btn-dark column">8</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Croquis;