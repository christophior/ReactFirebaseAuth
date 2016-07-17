# React Firebase Authentication Starter

Quick starter code to get a simple react application with basic authentication using Firebase up and running

Currently using:

**React 0.14.X**

**React Router 2.0.X**

**Firebase 3.2.X**


## Instructions
```
git clone https://github.com/christophior/ReactFirebaseAuth.git
cd ReactFirebaseAuth
npm install
```

once everything is installed just go to `/app/utils/firebaseUtils.js`
and update the following chunk of code:

```javascript
let firebaseInstance = firebase.initializeApp({
		apiKey: "xxxxxxxxxx",
		authDomain: "xxxxxxxxxx",
		databaseURL: "xxxxxxxxxx",
		storageBucket: "xxxxxxxxxx"
	});
```

with your project information from the Firebase console
https://console.firebase.google.com/

Run!
```
npm start
// navigate to localhost:8000
```