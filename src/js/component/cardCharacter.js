import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const CardCharacter = ({ character }) => {
    const { store, actions } = useContext(Context);

    return (<div className="card m-2 col-2" key={character.id}>
        <img src={character.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">Species: {character.species}</p>
            <p className="card-text">Gender: {character.gender}</p>
            <p className="card-text">Status: {character.status}</p>
            <div className="d-flex justify-content-between">
                <button className={store.favorites.includes(character.name) ? "btn btn-outline-success text-success" : "btn btn-outline-warning text-warning"} onClick={() => actions.setFavorites(character.name)}>❤</button>
                <Link to={"carddetails/character/" + character.id}>
                    <button href="#" className="btn btn-primary">Go to details</button>
                </Link>
            </div>
        </div>
    </div>)
};