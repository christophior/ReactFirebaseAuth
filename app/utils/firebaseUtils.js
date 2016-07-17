import firebase from 'firebase'
let firebaseInstance = firebase.initializeApp({
		apiKey: "xxxxxxxx",
		authDomain: "xxxxxxxx",
		databaseURL: "xxxxxxxx",
		storageBucket: "xxxxxxxx"
	});

let cachedUser = null;

const firebaseUtils = {
	signup: function (email, password, callback) {
		console.log('Signing up!');
		firebaseInstance.auth().createUserWithEmailAndPassword(email, password)
			.then(function() {
				cachedUser = firebaseInstance.auth().currentUser;
				callback();
			}, function (error) {			
				callback(error.message);
			});
	},
	login: function (email, password, callback) {
		console.log('Logging in!');
		firebaseInstance.auth().signInWithEmailAndPassword(email, password)
			.then(function() {
				cachedUser = firebaseInstance.auth().currentUser;
				callback();
			}, function (error) {
				callback(error.message);
			});
	},
	resetPassword: function (email, callback) {
		console.log('Resetting password!');
		firebaseInstance.auth().sendPasswordResetEmail(email)
			.then(function(){
				callback();
			}, function (error) {
				callback(error.message);
			});
	},
	logout: function () {
		console.log('Logging out!');
		firebaseInstance.auth().signOut();
		cachedUser = null;
	},
	isLoggedIn: function () {
		console.log('Are we logged in? ', cachedUser && true || firebaseInstance.auth().currentUser || false);
		return cachedUser && true || firebaseInstance.auth().currentUser || false;
	}
};

export default firebaseUtils