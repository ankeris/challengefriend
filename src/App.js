import React, { Component } from 'react';
import './styles/css/app.css';
import './styles/css/canvas.css';

// components
import SelectMap from './containers/selectMap';
import Header from './components/header';

//p5
// import mainMap from './sketches/map';

class App extends Component {
    constructor() {
        super();
        this.state = {
            mapSelected: false,
            isLoggedIn: true,
            name: 'Player'
        }
    }

    render() {
        return (
            <div className="App">
                <Header name={this.state.name} />
                {/* <P5Canvas canvas={mainMap} /> */}
                <SelectMap />
            </div>
        );
    }
}

export default App;
