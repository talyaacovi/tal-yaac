import React, { Component } from 'react';
import { Input } from './Input';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { userName: '' };
        this.updateName = this.updateName.bind(this);
    }

    updateName(name) {
        this.setState({ userName: name })
    };

	render() {

        let greeting;
        if (this.state.userName !== '') {
            greeting = (
                    <div>
                        <h2 className='color-header'>Hi <span style={{ fontFamily: 'Satisfy' }}>{this.state.userName}</span>, nice to meet you!</h2>
                    </div>
                )
        }
        else {
        	greeting = (
        			<div>
        				<h2>What is your name?</h2>
	                	<Input onChange={this.updateName.bind(this)} />
	                </div>
        		)
        }

		return (
				<div>
	                {greeting}
	            </div>
			)
	}
}