import React, {Component} from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";


const PlanetsCard = (props)=>{

    return(
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col m-2">
                <div className="card" style= {{width: "18rem"}}>
                    <img src={"https://starwars-visualguide.com/assets/img/planets/"+props.idPlaneta+".jpg"} className="card-img-top" alt="..." style= {{maxHeight: "200px"}} />
                    <div className="card-body text-start">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Population {props.population}</p>
                        <p className="card-text">Terrain: {props.terrain}</p>
                        <p className="card-text">Climate: {props.climate}</p>
                        <div className="d-flex justify-content-between">
                            <Link to= {"/singlePlanet/" + props.idPlaneta} className="btn btn-light border-bottom border-info">Leer más</Link>
                            <Link to="/singlePlanet/:theid" className="btn btn-light border-bottom border-warning"><i className="fa fa-heart text-warning" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}
export default PlanetsCard