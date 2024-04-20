import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 p-3 pe-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5">Home</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown ms-auto">
					<button className="btn btn-success dropdown-toggle me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.length > 0 ? store.favorites.map((favorite, i) => {
							return <li className="dropdown-item" key={i}>{favorite} <span onClick={() => actions.setFavorites(favorite)}>🗑</span></li>;
						}) : <li className="dropdown-item">Empty</li>}
					</ul>
				</div>
			</div>
		</nav>
	);
};
