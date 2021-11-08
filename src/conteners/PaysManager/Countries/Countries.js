// Le composant countries fait l'affichage des pays reçu en props par PaysManager
import React from 'react';

const countries = (props) => (
    <div className="row no-gutters">
        <div className="col-4">
            <img src={props.countryFlag} width="100%" className="p-2" alt={props.name} />
        </div>
        <div className="col">
            <h2>Nom : {props.nameFr}</h2>
            <p>Capitale: <span className="fw-bold">{props.capital}</span></p>
            <p>Région: <span className="fw-bold">{props.region}</span></p>
        </div>
    </div>
);

export default countries;