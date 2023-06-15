import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Personaje = props => {
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
						<img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} class="img-fluid rounded-start" alt="..." style= {{maxHeight: "300px"}}/>
					</div>
					<div class="col-md-8">
						<div class="card-body">
							<h5 class="card-title">{store.people[params.theid-1].name}</h5>
							<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">name</th>
							<th scope="col">Gender</th>
							<th scope="col">Birth year</th>
							<th scope="col">Height</th>
							<th scope="col">Mass</th>
							<th scope="col">Hair Color</th>
							<th scope="col">Eye Color</th>
						</tr>
					</thead>
						<tr>
							<td>{store.people[params.theid-1].name}</td>
							<td>{store.people[params.theid-1].gender}</td>
							<td>{store.people[params.theid-1].birth_year}</td>
							<td>{store.people[params.theid-1].height}</td>
							<td>{store.people[params.theid-1].mass}</td>
							<td>{store.people[params.theid-1].hair_color}</td>
							<td>{store.people[params.theid-1].eye_color}</td>
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

Personaje.propTypes = {
	match: PropTypes.object
};
