import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import LoginContainer from '../containers/LoginContainer'
import SignUpContainer from '../containers/SignUpContainer'
import firebaseUtils from '../utils/firebaseUtils'

const Home = React.createClass({
	getInitialState () {
		return {
			isLoggedIn: false
		}
	},
	componentDidMount () {
		this.setState({
			isLoggedIn: firebaseUtils.isLoggedIn()
		});
	},
	render () {
		let fieldsToShow;

		// figure out what to show depending on us being signed in or not 
		if (this.state.isLoggedIn) {
			fieldsToShow = (
				<div>
					<div className='col-sm-6'>
						<Link to="/logout">
							<button type="button" className="btn btn-lg btn-danger">Logout!</button>
						</Link>
					</div>
					<div className='col-sm-6'>
						<Link to="/dashboard">
							<button type="button" className="btn btn-lg btn-success">Dashboard</button>
						</Link>
					</div>
				</div>
			);
		} else {
			fieldsToShow = (
				<div>
					<SignUpContainer />
					<LoginContainer />
				</div>
			);
		}

		return (
			<div className='col-sm-12 text-center'>
				<h1>Home Page</h1>
				{fieldsToShow}
			</div>
		)
	}
});

export default Home