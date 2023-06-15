import React, {useContext}from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";


const VehiculosCard = (props)=>{
    const{store, actions}=useContext(Context)
        return(
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col m-2">
                    <div className="card" style= {{width: "18rem"}}>
                        <img src={rigoImage} className="card-img-top" alt="..." style= {{maxHeight: "200px"}} />
                        <div className="card-body text-start">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">Model: {props.model}</p>
                            <p className="card-text">Manufacturer: {props.manufacturer}</p>
                            <p className="card-text">Passengers: {props.passengers}</p>
                            <div className="d-flex justify-content-between">
                                <Link to= {"/singleVehicle/" + props.idVehiculos} className="btn btn-light border-bottom border-info">Leer más</Link>
                                <button id="fav" type="button" className="btn btn-outline-warning"  onClick={()=>{actions.añadirFavoritos(props.name)}}>
                                    <i className="fa fa-heart text-warning" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default VehiculosCard