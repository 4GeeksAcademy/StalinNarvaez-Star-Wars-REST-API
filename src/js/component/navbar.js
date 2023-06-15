import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import star_Wars_Logo from "../../img/star_Wars_Logo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/" className="m-2">
					<img src={star_Wars_Logo} width="70" height="50" />
				</Link>
				<div className="dropdown m-2 ">
					<a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
						Favoritos
					</a>
					<ul className="dropdown-menu" style={{width:"200px"}}>
						{store.favorite.map((item, index) => {
							return (
								<li key={index} className="dropdown-item d-flex container">
									<div className="row">
    									<div className="col-8 justify-content-start fs-6">
											<span className="p-2 text-primary">{item}</span>
										</div>
										<div className="col-auto justify-content-end">
											<button className="border border-0" onClick={() => actions.borrarFavoritos(item)}>
												<i className="fa fa-solid fa-trash"/>
											</button>
										</div>
									</div>	
								</li>
							)
						})}
					</ul>
				</div>
			</nav>
		);
};
