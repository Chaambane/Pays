import React from 'react';
import Img404 from '../../assets/images/Scarecrow.png';

const error404 = (props) => (
    <div className="container-fluid">
        <p className="fw-bold">404 NOT FOUND</p>
        <div className="row no-gutters align-content-center">
            <div className="col-6">
                <img src={Img404} className="col-12" alt="error404" />
            </div>
            <div className="col-6 justify-content-center h-auto">
                <p className="fw-bold fs-2 alert alert-danger">La page que vous avez demandé est supprimer ou temporairement inacessible</p>
            </div>
        </div>
    </div>
);

export default error404;