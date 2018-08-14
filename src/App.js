import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/css/app.css';
import './styles/css/canvas.css';

// components
import Canvas from './components/canvas';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Canvas />
            </div>
        );
    }
}

export default App;
