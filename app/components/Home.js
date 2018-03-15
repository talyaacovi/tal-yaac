import React, { Component } from 'react';

export class Home extends Component {
	render() {
		return (
				<div>
					<div className='row'>
						<div className='col-xs-6'>
							<h2>hi, my name is <span className='emphasis'>Tal</span><br/>
							 and I am a <span className='emphasis'>software engineer</span><br/>
							 living in <span className='emphasis'>San Francisco</span>.</h2>
						</div>
						<div className='col-xs-6'>
							<img className='img-responsive home-img' src='/app/static/img/tal.jpg'/>
						</div>
					</div>
				</div>
			)
	}
}