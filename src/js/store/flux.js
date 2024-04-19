const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			locations: [],
			episodes: [],
			favorites: []


		},
		actions: {

			getCharacters: async () => {
				const response = await fetch("https://rickandmortyapi.com/api/character");
				const data = await response.json();
				setStore({ characters: data.results })
				console.log(data);
			},


			getLocations: async () => {
				const response = await fetch("https://rickandmortyapi.com/api/location");
				const data = await response.json();
				setStore({ locations: data.results });
				console.log(data);
			},

			getEpisodes: async () => {
				const response = await fetch("https://rickandmortyapi.com/api/episode");
				const data = await response.json();
				setStore({ episodes: data.results })
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
