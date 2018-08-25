import React from 'react';

const MapButton = props => {
    return (
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">Hi {props.name}, Welcome to the &#x3C;game&#x3E;</h1>
        </header>
    )
}

export default MapButton;