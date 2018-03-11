// var React = require('react');
import React, { Component } from 'react';

export class Input extends Component {
    constructor(props) {
        super(props);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(evt) {
        if (evt.keyCode === 13 ) {
            this.props.onChange(evt.target.value)
        }
    };

    render() {
        return (
            <div>
                <input onKeyDown={this.handleUserInput} type='text' />
            </div>
    )}
}
