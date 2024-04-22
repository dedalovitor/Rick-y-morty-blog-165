const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: { results: [] },
			locations: { results: [] },
			episodes: { results: [] },
			favorites: []


		},
		actions: {

			getCharacters: async (url) => {
				const response = await fetch(url);
				const data = await response.json();
				data.results = getStore().characters.results.concat(data.results);
				setStore({ characters: data })
				console.log(data);
			},


			getLocations: async (url) => {
				const response = await fetch(url);
				const data = await response.json();
				data.results = getStore().locations.results.concat(data.results);
				setStore({ locations: data });
				console.log(data);
			},

			getEpisodes: async (url) => {
				const response = await fetch(url);
				const data = await response.json();
				data.results = getStore().episodes.results.concat(data.results);
				setStore({ episodes: data })
				console.log(data);

			},

			setFavorites: (name) => {
				const store = getStore(); //utilizamos el getStore para poder acceder al store
				if (!store.favorites.includes(name)) {
					setStore({ favorites: [...store.favorites, name] })
				} else {
					setStore({ favorites: store.favorites.filter((favName) => favName != name) })
				}
				;  //si [...store.favorites, name] no está entre [] no funciona, ya que parece que al ser favorites un array si no lo indicamos en el action no lo interpreta como un array
			},

		}
	}
};


export default getState;
