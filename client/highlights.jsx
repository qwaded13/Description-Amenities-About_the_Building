import React from 'react';

let highlightAmens = (props) => {
    return(
    <ul>
        {props.highlights.map((highlight) => {
            let highlightText = {highlight}.highlight.toString();
            // console.log(highlightText)
            if(highlightText === 'Cats and Dogs Allowed'){

                return <li id='petsAllowed'>{highlight}</li>

            } else if(highlightText === 'Washer/Dryer In-Unit'){

                return <li id='washer_dryerUnit'>{highlight}</li>
            
            } else if(highlightText === 'Full-time Doorman'){

                return <li id='fullTimeDoorman'>{highlight}</li>

            } else if(highlightText === 'Elevator'){

                return <li id='elevator'>{highlight}</li>
           
            }
        })}
    </ul>
    )
}

export default highlightAmens;