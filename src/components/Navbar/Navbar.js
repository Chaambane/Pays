import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = (props) => (
    <nav className="container-fluid navbar navbar-expand-lg navbar-info bg-info p-2 mt-1">
        <div className="container-fluid">
            <button className="navbar-toggler text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                Menu<span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav fw-bold">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact>Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/pays">Les pays</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default navbar;