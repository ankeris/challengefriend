import React from 'react';

const MapButton = props => {
    return (
        <button onClick={() => props.onClick()}>{props.text}</button>
    )
}

export default MapButton;