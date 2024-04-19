import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const CardDetails = () => {

	const params = useParams();

	const [itemDetails, setItemDetails] = useState({})

	useEffect(() => {
		getDetails();
	}, [])

	const getDetails = async () => {
		const response = await fetch("https://rickandmortyapi.com/api/" + params.type + "/" + params.id);
		const data = await response.json();
		setItemDetails(data);
	}

	return (
		<div className="container">
			<h1 className="m-2">{itemDetails.name}</h1>
			{itemDetails.image ? <img className="m-2" src={itemDetails.image} /> : null}
			{Object.keys(itemDetails).map((x, i) => {
				if (typeof itemDetails[x] != "object") {
					return (<p key={i}>{x}: {itemDetails[x]}</p>)
				}

			})}
			<p className="m-2">{params.type == "location" ? <p>Location ID: {params.id}</p> : params.type == "character" ? <p>Character ID: {params.id}</p> : <p>Episode ID: {params.id}</p>} </p>

		</div>
	);
};


