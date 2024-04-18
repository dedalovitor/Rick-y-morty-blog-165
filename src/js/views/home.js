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
					{store.characters.map((character) => {
						return (
							<CardCharacter key={character.id} character={character} />
						)
					})

					}


				</div>
				<h1 className="mt-5">Locations</h1>
				<div className="container mt-5">
					<div className="row">
						{store.locations.map((location) => {
							return (
								<CardLocation key={location.id} location={location}></CardLocation>
							)
						})
						}
					</div>
				</div>

				<h1 className="mt-5">Episodes</h1>
				<div className="container mt-5">
					<div className="row">
						{store.episodes.map((episode) => {
							return (
								<CardEpisode key={episode.id} episode={episode}></CardEpisode>
							)
						})
						}
					</div>
				</div>


			</div>


		</div >
	);
};
