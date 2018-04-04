import React, { Component } from 'react';

export class Project extends Component {
	render() {
		return (
				<div>
					<div className='row'>
						<div className='col-xs-12'>
							<h2 className='emphasis'>PROJECTS</h2>
						</div>
					</div>
					<div className='row'>
						<ul className='list-unstyled col-xs-12'>
							<li><a style={{ fontSize: 20 }} target='_blank' href='https://www.lolaeats.com'>Lola Eats</a>, <span style={{ fontSize: 12 }}>Hackbright Final Project</span></li>
							<li><img className='img-responsive' src='/app/static/img/lola.png'/></li>
							<li className='projects'><a style={{ fontSize: 20 }} target='_blank' href='https://github.com/talyaacovi/hangman'>Hangman</a>, <span style={{ fontSize: 12 }}>Classic game written in React</span></li>
							<li><img className='img-responsive' src='/app/static/img/hangman.png'/></li>
							{/*}<li>Boots & Cats (in development)</li>*/}
						</ul>
					</div>
				</div>
			)
	}
}