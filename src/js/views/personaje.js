import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, ListGroup } from "react-bootstrap";

export const Personaje = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	useEffect(() => {
		actions.getCharacter(theid);
	});
	return (
		<>
			<Card
				border="warning"
				style={{ width: "25rem" }}
				className="mb-2 bg-dark text-white my-5 d-flex container-fluid">
				<Card.Header>
					<h1>{store.character.name}</h1>
				</Card.Header>
				<Card.Body>
					<Card.Title>
						<h3>Caracteristicas</h3>
					</Card.Title>
					<hr />
					<p>Altura: {store.character.height}</p>
					<p>Pesso: {store.character.mass}</p>
					<p>Color de pelo: {store.character.hair_color}</p>
					<p>Color de piel: {store.character.skin_color}</p>
					<p>Color de ojos: {store.character.eye_color}</p>
					<p>Genero: {store.character.gender}</p>
				</Card.Body>
			</Card>
		</>
	);
};
