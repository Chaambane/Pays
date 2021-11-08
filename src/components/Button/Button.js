import React from 'react'

    const button = (props) => (
        <button className="btn btn-primary me-1" onClick={props.clic}>
            {props.children}
        </button>
    );

export default button;