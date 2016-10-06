import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
import requireAuth from '../utils/requireAuth'

import Main from '../components/Main'
import Home from '../components/Home'
import Logout from '../components/Logout'

import DashboardContainer from '../containers/DashboardContainer'
import ForgotPasswordContainer from '../containers/ForgotPasswordContainer'

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='dashboard' component={DashboardContainer} onEnter={requireAuth} />
			<Route path='logout' component={Logout} />
			<Route path='forgotpassword' component={ForgotPasswordContainer} />
		</Route>
	</Router>
);

export default routes