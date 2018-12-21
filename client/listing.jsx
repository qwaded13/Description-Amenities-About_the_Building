import React from 'react';

let listingAmens = (props) => {
    return(
        <ul>
            {props.listings.map((listing) => {
                return <li>{listing}</li>
            })}
        </ul>
    )
}

export default listingAmens;