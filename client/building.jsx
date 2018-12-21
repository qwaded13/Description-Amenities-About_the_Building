import React from 'react';

let buildingAmens = (props) => {
    return(
        <ul>
            {props.buildings.map((building) => {
                return <li>{building}</li>
            })}
        </ul>
    )
}

export default buildingAmens;