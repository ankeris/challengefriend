import React, { Component } from 'react';

class Canvas extends Component {
    componentWillMount() {
        this.setState({
            canvasSize: {
                canvasWidth: 600, canvasHeight: 400
            }
        })
    }
    // componentDidMount() {
    //     const { canvasWidth, canvasHeight } = this.state.canvasSize;
    //     this.canvasHex.width = canvasWidth;
    //     this.canvasHex.height = canvasHeight;
    // }
    render() {
        return (
            <React.Fragment>
                <canvas className="game-canvas" width={this.state.canvasSize.canvasWidth} height={this.state.canvasSize.canvasHeight}></canvas>
                <p className="score">here will be the score</p>
            </React.Fragment>
        );
    }
}

export default Canvas;
