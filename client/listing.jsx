import React from 'react';

let listingAmens = (props) => {
    return(
        <ul id='lAmens'>
            {props.listings.map((listing) => {
                return <li>{listing}</li>
            })}
        </ul>
    )
}

export default listingAmens;