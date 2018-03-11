// var React = require('react');
// var Input = require('./Input')

import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';

import { Home } from './Home';
import { About } from './About';
import { Project } from './Project';
import { Skill } from './Skill';
import { Contact } from './Contact';

class Main extends Component {
    render() {

        return (
                <HashRouter>
                    <div>
                        <h1 className='main-header'>tal yaacovi</h1>
                        <Home />
                        <ul>
                            {/*<li><NavLink to='/'>Home</NavLink></li>*/}
                            <li><NavLink to='/about'>About Me</NavLink></li>
                            <li><NavLink to='/projects'>Projects</NavLink></li>
                            <li><NavLink to='/skills'>Skills</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                        </ul>
                        <div className='content'>
                            {/*<Route exact path='/' component={Home}/>*/}
                            <Route path='/about' component={About}/>
                            <Route path='/projects' component={Project}/>
                            <Route path='/skills' component={Skill}/>
                            <Route path='/contact' component={Contact}/>

                        </div>
                    </div>
                </HashRouter>
            )
    }
}


export default Main;
// module.exports = App