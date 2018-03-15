import React, { Component } from 'react';

export class Skill extends Component {
	render() {
		return (
				<div>
					<div className='row'>
						<div className='col-xs-12'>
							<h2 className='emphasis'>SKILLS</h2>
							<h3>These are some of my skills, but I am always learning!</h3>
						</div>
					</div>
					<div className='row'>
						<ul className='list-unstyled col-xs-12 skills-list'>
							<li>Python</li>
							<li>Flask / Jinja</li>
							<li>React, Webpack, Babel</li>
							<li>JavaScript, jQuery, AJAX</li>
							<li>jQuery</li>
							<li>Bootstrap, HTML, CSS</li>
							<li>SQL, PostgreSQL, SQLAlchemy</li>
							<li>Git, GitHub, Command Line, Sublime Text</li>
							<li>AWS (S3, Lambda, API Gateway)</li>
						</ul>
					</div>
				</div>
			)
	}
}