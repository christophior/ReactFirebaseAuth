import React, { PropTypes } from 'react'
import { Link } from 'react-router'

function UserForm (props) {
	return (
		<div className="col-sm-12">
			<form onSubmit={props.onSubmitInfo}>
				<div className="form-group col-sm-8 col-sm-offset-2">
					<input
						className="form-control"
						placeholder="Email"
						onChange={props.onUpdateEmail}
						value={props.email}
						type="text" />
				</div>
				<h3>{props.error}</h3>
				<div className="form-group col-sm-4 col-sm-offset-4">
					<button
						className="btn btn-block btn-success"
						type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}

UserForm.propTypes = {
	onSubmitInfo: PropTypes.func.isRequired,
	onUpdateEmail: PropTypes.func.isRequired,
	email: PropTypes.string
};

export default UserForm