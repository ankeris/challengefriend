import React, { Component } from 'react';
import MapButton from '../components/MapButton';

import P5Canvas from '../components/p5canvas';
import mainMap from '../sketches/map';
import TextMessage from '../components/textMessage';

export default class SelectMap extends Component {
    constructor() {
        super();
        this.state = {
            maps: {
                green: { desc: 'Green Map', map: 'green', color: [60, 179, 113] },
                blue: { desc: 'Blue Map', map: 'blue', color: [30, 144, 255] }
            },
            mapSelected: null,
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick(map) {
        this.setState({
            mapSelected: map
        })
    }
    _renderMapAccordingly() {
        switch (this.state.mapSelected) {
            case 'green': return <P5Canvas canvas={mainMap} color={this.state.maps.green.color} />
            case 'blue': return <P5Canvas canvas={mainMap} color={this.state.maps.blue.color} />
            default: return <TextMessage text={'please select a map'} />
        }
    }

    render() {
        return (
            <React.Fragment>
                <MapButton
                    onClick={this.onClick.bind(this, this.state.maps.green.map)}
                    text={this.state.maps.green.desc}
                    map={this.state.maps.green.map}
                />
                <MapButton
                    onClick={this.onClick.bind(this, this.state.maps.blue.map)}
                    text={this.state.maps.blue.desc}
                    map={this.state.maps.blue.map}
                />
                {this._renderMapAccordingly()}
                {this.state.mapSelected ?
                    <MapButton
                        onClick={this.onClick.bind(this, null)}
                        text={'Turn off map'}
                        map={this.state.maps.green.map}
                    />
                    : null}

            </React.Fragment>
        );
    }
}