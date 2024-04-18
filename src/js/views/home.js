import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
		actions.getLocations();
		actions.getEpisodes();
	}, [])

	return (
		< div className="text-center mt-5" >
			<h1 className="mt-5">Characters</h1>
			<div className="container" >
				<div className="row">
					{store.characters.map((item) => {
						return (
							<div className="card m-2 col-2" key={item.id}>
								<img src={item.image} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">Species: {item.species}</p>
									<p className="card-text">Gender: {item.gender}</p>
									<p className="card-text">Status: {item.status}</p>
									<a href="#" className="btn btn-primary">Go somewhere</a>
								</div>
							</div>
						)
					})

					}


				</div>
				<h1 className="mt-5">Locations</h1>
				<div className="container mt-5">
					<div className="row">
						{store.locations.map((item) => {
							return (
								<div className="card m-2" key={item.id} style={{ width: "18rem" }}>
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMfsOio-gsDrxwPoJz51NqAFOrb2hOkWt4vQ&s" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{item.name}</h5>
										<p className="card-text">Type: {item.type}</p>
										<p className="card-text">Dimension: {item.dimension}</p>
										<p className="card-text">Residents: {item.residents.length}</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
							)
						})
						}
					</div>
				</div>

				<h1 className="mt-5">Episodes</h1>
				<div className="container mt-5">
					<div className="row">
						{store.locations.map((item) => {
							return (
								<div className="card m-2" key={item.id} style={{ width: "18rem" }}>
									<img src="https://www.latercera.com/resizer/oStaaBjKjrTK8rrWE2MFitEba_g=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/FIN7ZFLY2VF7ZIO3F4VAH7DJ5I.jpg" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{item.name}</h5>
										<p className="card-text">Type: {item.type}</p>
										<p className="card-text">Dimension: {item.dimension}</p>
										<p className="card-text">Residents: {item.residents.length}</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
							)
						})
						}
					</div>
				</div>


			</div>


		</div >
	);
};
