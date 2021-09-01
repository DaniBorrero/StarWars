import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, ListGroup } from "react-bootstrap";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	useEffect(() => {
		actions.planet(theid);
	});
	return (
		<>
			<Card
				border="warning"
				style={{ width: "25rem" }}
				className="mb-2 bg-dark text-white my-5 d-flex container-fluid">
				<Card.Header>
					<h1>{store.planetas.name}</h1>
				</Card.Header>
				<Card.Body>
					<Card.Title>
						<h3>Caracteristicas</h3>
					</Card.Title>
					<hr />
					<p>Diametro: {store.planetas.diameter} </p>
					<p>Clima: {store.planetas.climate} </p>
					<p>Poblacion: {store.planetas.population} </p>
					<p>Terreno: {store.planetas.terrain} </p>
					<p>Gravedad: {store.planetas.gravity} </p>
				</Card.Body>
			</Card>
		</>
	);
};
