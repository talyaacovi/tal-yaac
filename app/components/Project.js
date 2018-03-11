import React, { Component } from 'react';

export class Project extends Component {
	render() {
		return (
				<div>
					<h2>Here are some projects I've worked on</h2>
					<ul className='list-unstyled'>
						<li><a target='_blank' href='http://www.lolaeats.com'>Lola Eats</a>, Hackbright Final Project</li>
						<li>Boots & Cats (in development)</li>
					</ul>
				</div>
			)
	}
}