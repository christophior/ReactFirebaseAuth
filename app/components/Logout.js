import React from 'react'
import { Link } from 'react-router'
import * as firebase from 'firebase'

const Logout = React.createClass({
	componentDidMount () {
		firebase.auth().signOut();
	},
	render () {
		return (
			<div>
				<p>You are logged out</p>
				<Link to="/dashboard"><p>Attempt to navigating to a protected page!</p></Link>
			</div>);
	}
});

export default Logout