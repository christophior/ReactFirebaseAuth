import React from 'react'

const DashboardContainer = React.createClass({
	render () {
		return (
			<div className='col-sm-12 text-center'>
				<h1>Dashboard</h1>
				<p>This is a protected route.</p>
			</div>
		)
	}
});

export default DashboardContainer