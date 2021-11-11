// Le composant countries fait l'affichage des pays reçu en props par PaysManager
import React from 'react';
import { NavLink } from 'react-router-dom'

const countries = (props) => {
    let content = "";
    if(!props.solo) { // Si solo est faux alors c'est qu'on est dans le composant Countries donc on affiche la navLink
        content = (
            <NavLink to={"/pays/" + props.name} className="nav-link border rounded bg-secondary fw-bold text-white">Fiche du pays</NavLink> //*Liens pour afficher les détails d'un pays.
        );
    } else { // sinon si il est vraie alors c'est qu'on est dans le composant DetailCountry et on rajoute la population
        content = (
            <p>Population: <span className="badge bg-success fw-bold">{props.population}</span></p>
        )
    }
    return(
        <div className="row no-gutters p-1">
            <div className="col-4">
                <img src={props.countryFlag} width="100%" className="p-2" alt={props.name} />
            </div>
            <div className="col">
                <h2>Nom : {props.nameFr}</h2>
                <p>Capitale: <span className="fw-bold">{props.capital}</span></p>
                <p>Région: <span className="fw-bold">{props.region}</span></p>
                {content}
            </div>
        </div>
    )
};

export default countries;