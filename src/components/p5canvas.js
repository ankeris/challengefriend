import React, { Component } from 'react';
import p5 from 'p5';

export default class P5Canvas extends Component {
    componentDidMount() {
        this.canvas = new p5(this.props.canvas, this.canvasWrapper);
        if (this.canvas.myCustomRedrawAccordingToNewPropsHandler) {
            this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
        }
        console.log(this.canvasWrapper);
    }

    componentWillReceiveProps(newprops) {
        if (this.props.canvas !== newprops.canvas) {
            this.canvasWrapper.removeChild(this.canvasWrapper.childNodes[0]);
            this.canvas = new p5(newprops.canvas, this.canvasWrapper);
        }
        if (this.canvas.myCustomRedrawAccordingToNewPropsHandler) {
            this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
        }
    }

    render() {
        return (
            <section ref={canvas => (this.canvasWrapper = canvas)}></section>
        );
    }
}
