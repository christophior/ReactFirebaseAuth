import React, { Component } from 'react'
import * as firebase from 'firebase'
import * as firebaseConfig from '../../firebase.config.js'

firebase.initializeApp(firebaseConfig);

function requireAuth (nextState, replace) {
	if (null === firebase.auth().currentUser) {
		replace({
			pathname: '/',
			state: { nextPathname: nextState.location.pathname }
		})
	}
}

export default requireAuth