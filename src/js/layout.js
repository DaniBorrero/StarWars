import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Test } from "./component/navbar";
import { Footer } from "./component/footer";
import { Personaje } from "./views/personaje";
import { Planet } from "./views/planet";
import { Vehiculo } from "./views/vehiculo";
import { Background } from "./component/background";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<>
			<div className="d-flex flex-column">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Test />
						<div className="container ">
							<Switch>
								<Route exact path="/">
									<Home />
								</Route>
								<Route exact path="/personaje/:theid">
									<Personaje />
								</Route>
								<Route exact path="/planet/:theid">
									<Planet />
								</Route>
								<Route exact path="/vehiculo">
									<Vehiculo />
								</Route>
								<Route exact path="/single/:theid">
									<Single />
								</Route>
								<Route>
									<h1>Not found!</h1>
								</Route>
							</Switch>
						</div>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		</>
	);
};

export default injectContext(Layout);
