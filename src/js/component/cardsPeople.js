import React, {useContext}from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardsPeople = (props)=>{
    const{store, actions}=useContext(Context)
        return(
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col m-2">
                    <div className="card" style= {{width: "18rem"}}>
                        <img src={"https://starwars-visualguide.com/assets/img/"+props.type+"/"+props.idPersonaje+".jpg"} className="card-img-top" alt="..." style= {{maxHeight: "200px"}}/>
                    
                        <div className="card-body text-start">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">Gender: {props.gender}</p>
                            <p className="card-text">Hair Color: {props.hairColor}</p>
                            <p className="card-text">Eye Color: {props.eyeColor}</p>
                            <div className="d-flex justify-content-between">
                                <Link to= {"/singlePerson/"+props.idPersonaje} className="btn btn-light border-bottom border-info">Leer más</Link>
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
export default CardsPeople