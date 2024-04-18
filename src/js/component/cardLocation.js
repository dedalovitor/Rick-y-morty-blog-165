import React, { Component } from "react";
import { Link } from "react-router-dom";

export const CardLocation = ({ location }) => {

    return (
        <div className="card m-2" key={location.id} style={{ width: "18rem" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMfsOio-gsDrxwPoJz51NqAFOrb2hOkWt4vQ&s" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{location.name}</h5>
                <p className="card-text">Type: {location.type}</p>
                <p className="card-text">Dimension: {location.dimension}</p>
                <p className="card-text">Residents: {location.residents.length}</p>
                <Link to={"carddetails/location/" + location.id}>
                    <button href="#" className="btn btn-primary">Go to details</button>
                </Link>
            </div>
        </div>)
};