const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favoritos: [],
			people: [],
			planet: [],
			vehicle: [],
			character: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getCharacter: uid => {
				fetch("https://www.swapi.tech/api/people/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ character: result.result.properties });
					})
					.catch(error => console.log("error", error));
			},
			planet: uid => {
				fetch("https://www.swapi.tech/api/planets/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ planet: result.result.properties });
					})
					.catch(error => console.log("error", error));
			},

			getPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(result => {
						setStore({ people: result.results });
					})
					.catch(error => console.log("error", error));
			},
			getPlanet: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(result => {
						setStore({ planet: result.results });
					})
					.catch(error => console.log("error", error));
			},
			addFavoritos: name => {
				const store = getStore();
				setStore({
					favoritos: [...store.favoritos, name]
				});
			},

			loadSomeData: () => {
				const store = getStore();
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
