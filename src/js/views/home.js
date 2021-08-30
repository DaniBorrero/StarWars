import "../../styles/home.scss";
import { Cards } from "../component/card";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardPlanet } from "../component/cardPlanet";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="contianer-fluid my-3">
				<h1>Personajes</h1>
				<div className="row bg-dark p-3 text-white scrollh">
					{store.people.map(persona => {
						return (
							<>
								<Cards
									obj={persona}
									url_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL--27dGNYvfui73LzVnVdQKt1mGGxCNv98A&usqp=CAU"
								/>
							</>
						);
					})}
				</div>
			</div>

			<div className="contianer-fluid my-3">
				<h3 className="text-center">Planeta</h3>
				<div className="row bg-dark p-3 text-white scrollh">
					{store.planet.map(planet => {
						return (
							<>
								<CardPlanet
									obj={planet}
									url_img="https://as.com/meristation/imagenes/2020/12/17/betech/1608203224_632911_1608203373_noticia_normal_recorte1.jpg"
								/>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
};
