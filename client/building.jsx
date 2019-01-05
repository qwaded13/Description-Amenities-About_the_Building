import React from 'react';

let buildingAmens = (props) => {
    return(
        <ul id='bAmens'>
            {props.buildings.map((building) => {
                return <li>{building}</li>
            })}
        </ul>
    )
}

export default buildingAmens;