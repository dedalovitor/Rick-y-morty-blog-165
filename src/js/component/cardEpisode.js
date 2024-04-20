import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardEpisode = ({ episode }) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card m-2" key={episode.id} style={{ width: "18rem" }}>
            <img src="https://www.latercera.com/resizer/oStaaBjKjrTK8rrWE2MFitEba_g=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/FIN7ZFLY2VF7ZIO3F4VAH7DJ5I.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{episode.name}</h5>
                <p className="card-text">Air date: {episode.air_date}</p>
                <p className="card-text">Episode: {episode.episode}</p>
                <p className="card-text">Characters: {episode.characters.length} </p>


                <div className="d-flex justify-content-between">
                    <button className={store.favorites.includes(episode.name) ? "btn btn-warning text-success" : "btn btn-outline-warning text-warning"} onClick={() => actions.setFavorites(episode.name)}>❤</button>
                    <Link to={"carddetails/episode/" + episode.id}>
                        <button href="#" className="btn btn-primary">Go to details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};





