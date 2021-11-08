import React from 'react'

    const component = (props) => (
        <h1 className=" bg-info mt-2 rounded text-center text-white fw-bold p-2">
            {props.children}
        </h1>
    );

export default component;