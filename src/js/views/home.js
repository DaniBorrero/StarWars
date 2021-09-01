import "../../styles/home.scss";

import { Cards } from "../component/card";
import { CardPlanet } from "../component/cardPlanet";

import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="contianer-fluid my-3">
				<h1>Personajes</h1>
				<div className="row bg-dark p-3 text-white scrollh">
					{store.people.map((persona, id) => {
						return (
							<>
								<Cards 
									key={id}
									obj={persona}
									url_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL--27dGNYvfui73LzVnVdQKt1mGGxCNv98A&usqp=CAU"
								/>
							</>
						);
					})}
				</div>
			</div>

			<div className="contianer-fluid my-3">
				<h1>Planetas</h1>
				<div className="row bg-dark p-3 text-white scrollh">
					{store.planet.map((planet, id) => (
						<>
							<CardPlanet
								key={id}
								obj={planet}
								url_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL--27dGNYvfui73LzVnVdQKt1mGGxCNv98A&usqp=CAU"
							/>
						</>
					))}
				</div>
			</div>
		</>
	);
};
