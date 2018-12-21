import React from 'react';

let outdoorAmens = (props) => {
    return(
        <ul>
            {props.outdoors.map((outdoor) => {
                return <li>{outdoor}</li>
            })}
        </ul>
    )
}

export default outdoorAmens;