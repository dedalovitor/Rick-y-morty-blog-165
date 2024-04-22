import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardCharacter } from "../component/cardCharacter";
import { CardLocation } from "../component/cardLocation";
import { CardEpisode } from "../component/cardEpisode";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {

	}, [])

	return (
		< div className="text-center mt-5" >
			<h1 className="mt-5">Characters</h1>
			<div className="container" >
				<div className="row">
					{store.characters.results ? store.characters.results.map((character) => {
						return (
							<CardCharacter key={character.id} character={character} />
						)
					}) : <p>loading...</p>

					}
				</div>
				<button type="button" className="btn btn-primary m-4" onClick={() => actions.getCharacters(store.characters.info.next)}>Load More</button>
				<button type="button" className="btn btn-primary m-4" onClick={() => actions.getCharacters(store.characters.info.prev)}>Prev</button>
				<h1 className="mt-5">Locations</h1>
				<div className="container mt-5">
					<div className="row">
						{store.locations.results ? store.locations.results.map((location) => {
							return (
								<CardLocation key={location.id} location={location}></CardLocation>
							)
						}) : <p>Loading...</p>
						}
					</div>
					<button type="button" className="btn btn-primary m-4" onClick={() => actions.getLocations(store.locations.info.next)}>Load More</button>
					<button type="button" className="btn btn-primary m-4" onClick={() => actions.getLocations(store.locations.info.prev)}>Prev</button>
				</div>

				<h1 className="mt-5">Episodes</h1>
				<div className="container mt-5">
					<div className="row">
						{store.episodes.results ? store.episodes.results.map((episode) => {
							return (
								<CardEpisode key={episode.id} episode={episode}></CardEpisode>
							)
						}) : <p>Loading...</p>
						}
					</div>
					<button type="button" className="btn btn-primary m-4" onClick={() => actions.getEpisodes(store.episodes.info.next)}>Load More</button>
					<button type="button" className="btn btn-primary m-4" onClick={() => actions.getEpisodes(store.episodes.info.prev)}>Prev</button>
				</div>


			</div>


		</div >
	);
};
