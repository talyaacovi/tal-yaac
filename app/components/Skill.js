import React, { Component } from 'react';

export class Skill extends Component {
	render() {
		return (
				<div>
					<div className='row'>
						<div className='col-xs-12'>
							<h2 className='emphasis'>SKILLS</h2>
						</div>
					</div>
					<div className='row'>
						<ul className='list-unstyled col-xs-12'>
							<li>Python</li>
							<li>Flask</li>
							<li>React</li>
							<li>JavaScript</li>
							<li>jQuery</li>
							<li>Bootstrap, HTML, CSS</li>
						</ul>
					</div>
				</div>
			)
	}
}