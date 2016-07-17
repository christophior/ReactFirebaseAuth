import React from 'react'
import { Link } from 'react-router'

const Main = React.createClass({
	render () {
		return (
			<div className='main-container'>
				<nav className='navbar navbar-default'>
					<div className='container-fluid'>
						<div className='navbar-header'>
							<Link to='/' className='navbar-brand'>Home</Link>
						</div>
					</div>
				</nav>
				{this.props.children}
			</div>
		)
	}
});

export default Main