import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehiculo = props => {
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
						<img src={`https://starwars-visualguide.com/assets/img/starships/${params.theid}.jpg`} class="img-fluid rounded-start" alt="..." style= {{maxHeight: "300px"}}/>
					</div>
					<div class="col-md-8">
						<div class="card-body">
							<h5 class="card-title">{store.starships[params.theid-1].name}</h5>
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
							<th scope="col">Model</th>
							<th scope="col">Manufacturer</th>
							<th scope="col">Max atmosphering speed</th>
							<th scope="col">Crew</th>
							<th scope="col">Passengers</th>
							<th scope="col">Starship class</th>		
						</tr>
					</thead>
						<tr>
							<td>{store.starships[params.theid-1].name}</td>
							<td>{store.starships[params.theid-1].model}</td>
							<td>{store.starships[params.theid-1].manufacturer}</td>
							<td>{store.starships[params.theid-1].max_atmosphering_speed}</td>
							<td>{store.starships[params.theid-1].crew}</td>
							<td>{store.starships[params.theid-1].passengers}</td>
							<td>{store.starships[params.theid-1].starship_class}</td>
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

Vehiculo.propTypes = {
	match: PropTypes.object
};
