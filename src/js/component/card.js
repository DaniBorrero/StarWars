import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropsTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export const Cards = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<Card className="m-3" style={{ width: "18rem" }}>
				<Card.Img className="my-3 mt-3" variant="top" src={props.url_img} />
				<Card.Link
					href="#"
					onClick={() => {
						actions.addFavoritos(props.obj.name);
						console.log(store.favoritos);
					}}>
					<i className=" ml-5 fas fa-heart" />
				</Card.Link>
				<Card.Body>
					<Card.Title className="text-dark">{props.obj.name}</Card.Title>
					<Link className="btn btn-primary" to={"/personaje/" + props.obj.uid}>
						Ver mas!
					</Link>
				</Card.Body>
			</Card>
		</>
	);
};

Cards.propstype = {
	name: PropsTypes.string
};
