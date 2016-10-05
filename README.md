# React Firebase Authentication Starter

Quick starter code to get a simple react application with basic authentication using Firebase up and running

Currently using:

**React 0.14.X**

**React Router 2.0.X**

**Firebase 3.4.X**


## Instructions
```
git clone https://github.com/christophior/ReactFirebaseAuth.git
cd ReactFirebaseAuth
npm install
```

once everything is installed just go to `/firebase.config.js`
and update the config:

```javascript
module.exports = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	storageBucket: "",
}
```

with your project information from the Firebase console
https://console.firebase.google.com/

Run!
```
npm start
// navigate to localhost:8000
```