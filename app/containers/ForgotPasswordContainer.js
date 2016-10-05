import React, { PropTypes } from 'react'
import EmailForm from '../components/EmailForm'
import * as firebase from 'firebase'

const ForgotPasswordContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState () {
		return {
			email: '',
			successMessage: '',
			errorMessage: ''
		}
	},
	handleSubmitInfo (e) {
		e.preventDefault();
		let email = this.state.email;

		this.setState({
			email: '',
			successMessage: '',
			errorMessage: ''
		});

		firebase.auth().sendPasswordResetEmail(email)
			.then(() => {
				console.log('Forgot password complete!');
				this.setState({
					successMessage: 'Please check your email to reset your password!'
				});
			})
			.catch((error) => {
				console.log('Forgot password err: ', error.message);
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
	render () {
		let errorMessage,
			successMessage;
		if (this.state.errorMessage !== '') {
			errorMessage = (
				<div className="col-sm-12">
					<div className="col-sm-4 col-sm-offset-4 alert alert-danger">
						<strong>Error!</strong> {this.state.errorMessage}
					</div>
				</div>
			);
		} else if (this.state.successMessage !== '') {
			successMessage = (
				<div className="col-sm-12">
					<div className="col-sm-4 col-sm-offset-4 alert alert-success">
						<strong>Success!</strong> {this.state.successMessage}
					</div>
				</div>
			);
		}

		return (
			<div className="col-sm-12 text-center">
				<h2>Forgot Password</h2>
				<EmailForm 
					onSubmitInfo={this.handleSubmitInfo}
					onUpdateEmail={this.handleUpdateEmail}
					email={this.state.email} />
				{errorMessage}
				{successMessage}
			</div>
		)
	}
});

export default ForgotPasswordContainer