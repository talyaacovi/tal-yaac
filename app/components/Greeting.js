import React, { Component } from 'react';
import { Input } from './Input';
// import Cookies from 'universal-cookie';

export class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = { userName: '', name: '' };
        this.updateName = this.updateName.bind(this);
    }

    updateName(name) {
        // let cookies = new Cookies();
        // cookies.set('name', name, { path: '/' });
        // console.log(cookies.get('name'));
        this.setState({ userName: name });
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
        				<h3>hi, what's your name?</h3>
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