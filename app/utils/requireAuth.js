import firebaseUtils from './firebaseUtils'

function requireAuth (nextState, replace) {
	if (!firebaseUtils.isLoggedIn()) {
		replace({
			pathname: '/',
			state: { nextPathname: nextState.location.pathname }
		})
	}
}

export default requireAuth