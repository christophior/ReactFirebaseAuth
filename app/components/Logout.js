import React from 'react'
import { Link } from 'react-router'
import firebaseUtils from '../utils/firebaseUtils'

const Logout = React.createClass({
	componentDidMount () {
		firebaseUtils.logout();
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