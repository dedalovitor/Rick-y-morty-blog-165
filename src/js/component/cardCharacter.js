import React, { Component } from "react";
import { Link } from "react-router-dom";

export const CardCharacter = ({ character }) => {

    return (<div className="card m-2 col-2" key={character.id}>
        <img src={character.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">Species: {character.species}</p>
            <p className="card-text">Gender: {character.gender}</p>
            <p className="card-text">Status: {character.status}</p>
            <Link to={"carddetails/character/" + character.id}>
                <button href="#" className="btn btn-primary">Go to details</button>
            </Link>

        </div>
    </div>)
};