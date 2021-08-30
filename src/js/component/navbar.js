import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Dropdown, NavDropdown } from "react-bootstrap";

export const Test = () => {
	const { store, actions } = useContext(Context);
	const [favoritos, setFavoritos] = useState([store.favoritos]);
	useEffect(() => {}, [store.favoritos]);

	return (
		<>
			<nav className="navbar navbar-light bg-dark text-white">
				<div className="container">
					<Link className="navbar-brand text-white" to="/" style={{ textDecoration: "none", color: "white" }}>
						<i className="fab fa-jedi-order fa-2x mx-3" />
						Star Wars
					</Link>

					<Dropdown border="warning">
						<Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" border="warning">
							Favoritos
						</Dropdown.Toggle>

						<Dropdown.Menu variant="dark">
							{store.favoritos.map((fav, key) => {
								return (
									<Dropdown.Item key={key}>
										{fav}
										<a
											onClick={() => {
												store.favoritos.splice(key, 1);
												setFavoritos([...store.favoritos]);
												console.log(store.favoritos);
											}}>
											<i className="fas fa-trash-alt" />
										</a>
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</nav>
		</>
	);
};
