import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planeta = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	useEffect(()=>{
		actions.apiGet(params.theid)
		
	},[])

	return (
		<div className="jumbotron text-center">
			<div class="card mb-3" style= {{maxWidth: "auto"}}>
				<div class="row g-0">
					<div class="col-md-4">
						<img src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} class="img-fluid rounded-start" alt="..." style= {{maxHeight: "300px"}}/>
					</div>
					<div class="col-md-8">
						<div class="card-body">
							<h5 class="card-title">{store.planets[params.theid-1].name}</h5>
							<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Population</th>
							<th scope="col">Rotation Period</th>
							<th scope="col">Orbital Period</th>
							<th scope="col">Diameter</th>
							<th scope="col">Climate</th>
							<th scope="col">Terrain</th>				
						</tr>
					</thead>
						<tr>
							<td>{store.planets[params.theid-1].name}</td>
							<td>{store.planets[params.theid-1].population}</td>
							<td>{store.planets[params.theid-1].rotation_period}</td>
							<td>{store.planets[params.theid-1].orbital_period}</td>
							<td>{store.planets[params.theid-1].diameter}</td>
							<td>{store.planets[params.theid-1].climate}</td>
							<td>{store.planets[params.theid-1].terrain}</td>
						</tr>
				</table>
			</div>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
		</div>
	);
};

Planeta.propTypes = {
	match: PropTypes.object
};
