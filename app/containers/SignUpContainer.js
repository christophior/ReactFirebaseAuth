import React, { PropTypes } from 'react'
import UserForm from '../components/UserForm'
import * as firebase from 'firebase'

const SignUpContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState () {
		return {
			email: '',
			password: '',
			errorMessage: ''
		}
	},
	handleSubmitInfo (e) {
		e.preventDefault();
		let email = this.state.email,
			password = this.state.password;

		this.setState({
			email: '',
			password: '',
			errorMessage: ''
		});

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(() => {
				console.log('Sign up complete, redirect!');
				this.context.router.push({
					pathname: '/dashboard'
				});
			})
			.catch((error) => {
				console.log('Sign up err: ', error.message);
				this.setState({
					errorMessage: error.message
				});
			});
	},
	handleUpdateEmail (e) {
		this.setState({
			email: e.target.value
		});
	},
	handleUpdatePassword (e) {
		this.setState({
			password: e.target.value
		});
	},
	render () {
		let errorMessage;
		if (this.state.errorMessage !== '') {
			errorMessage = (
				<div className="col-sm-12">
					<div className="col-sm-4 col-sm-offset-4 alert alert-danger">
						<strong>Error!</strong> {this.state.errorMessage}
					</div>
				</div>
			);
		}

		return (
			<div className="col-sm-6">
				<h2>Sign Up</h2>
				<UserForm 
					onSubmitInfo={this.handleSubmitInfo}
					onUpdateEmail={this.handleUpdateEmail}
					onUpdatePassword={this.handleUpdatePassword}
					email={this.state.email}
					password={this.state.password} />
				{errorMessage}
			</div>
		)
	}
});

export default SignUpContainer