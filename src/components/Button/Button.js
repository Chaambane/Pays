import React from 'react'

    const button = (props) => (
        <button className="btn btn-dark me-2 fw-bold border border-info" onClick={props.clic} style={{opacity: props.btnSelect? 1 : 0.6}}>
            {props.children}
        </button>
    );

export default button;