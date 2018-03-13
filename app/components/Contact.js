import React, { Component } from 'react';

export class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

    handleInputChange(evt) {
        const target = evt.target;
        const value = target.value;
        const name = target.name;

        this.setState({
        	[name]: value
        });
    }

    handleSubmit(evt) {
    	evt.preventDefault();
        let name = this.state.name;
        let email = this.state.email;
        let message = this.state.message;

        $.ajax({
            type: "POST",
            url: 'https://lbch5ws89h.execute-api.us-west-2.amazonaws.com/Testing',
            contentType: 'application/json',
            data: JSON.stringify({
                'name': name,
                'email': email,
                'message': message
            }),
            success: function(res){
                $('#form-response').text('Email was sent.');
            },
            error: function(){
                $('#form-response').text('Error.');
            }
        });
    }


	render() {
		return (
				<div>
					<div className='row'>
						<div className='col-xs-12'>
							<h2>Let's communicate!</h2>
						</div>
					</div>
					<div className='row'>
						<form className='col-xs-3' onSubmit={this.handleSubmit}>
							<div className='form-group'>
								<label>
									Name: <input id='name' className='form-control' name='name' type='text' value={this.state.name} onChange={this.handleInputChange}/>
								</label>
							</div>
							<div className='form-group'>
								<label>
									Email: <input id='email' className='form-control' name='email' type='email' value={this.state.email} onChange={this.handleInputChange}/>
								</label>
							</div>
							<div className='form-group'>
								<label>
									Message: <textarea id='message' className='form-control' name='message' value={this.state.message} onChange={this.handleInputChange}/>
								</label>
							</div>
							<button id='submit' className='btn btn-default' type='submit'>Submit</button>
						</form>
						<ul className='col-xs-3 col-xs-offset-2 list-unstyled'>
							<li><a target='_blank' href='https://www.linkedin.com/in/tal-yaacovi/'>LinkedIn</a></li>
							<li><a target='_blank' href='https://www.github.com/talyaacovi'>GitHub</a></li>
							<li><a target='_blank' href='https://www.instagram.com/wineyaac'>Instagram</a></li>
						</ul>
					</div>
				</div>
			)
	}
}