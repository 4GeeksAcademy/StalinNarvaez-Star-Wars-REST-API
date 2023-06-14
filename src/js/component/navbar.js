import React from "react";
import { Link } from "react-router-dom";
import star_Wars_Logo from "../../img/star_Wars_Logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/" className="m-2">
				<img src={star_Wars_Logo} width="70" height="50" />
			</Link>
			<div className="dropdown m-2">
				<button className="btn bg-primary text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos
				</button>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</nav>
	);
};
