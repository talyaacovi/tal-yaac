import React, { Component } from 'react';

export class About extends Component {
	render() {
		return (
				<div>
					<div className='row'>
						<div className='col-xs-12'>
							<h2 className='emphasis'>ABOUT ME</h2>
						</div>
					</div>
					<div className='row'>
						<div className='col-xs-2'>
							<p>i enjoy the long process of making sourdough from scratch.</p>
						</div>
						<div className='col-xs-5'>
							<img src='/app/static/img/bread1.jpg' className='img-responsive' />
						</div>
						<div className='col-xs-5'>
							<img src='/app/static/img/bread2.jpg' className='img-responsive' />
						</div>
					</div>
					<div className='row img-row'>
						<div className='col-xs-5'>
							<img src='/app/static/img/travel1.jpg' className='img-responsive' />
						</div>
						<div className='col-xs-5'>
							<img src='/app/static/img/travel2.jpg' className='img-responsive' />
						</div>
						<div className='col-xs-2'>
							<p>when i travel, food is an important part of the itinerary.</p>
						</div>
					</div>
					<div className='row img-row'>
						<div className='col-xs-2'>
							<p>i was born in Israel and visit my family there often.</p>
						</div>
						<div className='col-xs-5'>
							<img src='/app/static/img/israel1.jpg' className='img-responsive' />
						</div>
						<div className='col-xs-5'>
							<img src='/app/static/img/israel2.jpg' className='img-responsive' />
						</div>
					</div>
				</div>
			)
	}
}