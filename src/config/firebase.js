import firebase from 'firebase'

import {
	FIREBASE_API_KEY,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_DATABASE_URL,
	FIREBASE_STORAGE_BUCKET,
	FIREBASE_MESSAGING_SENDER_ID
} from '../../api_keys.js'

// import { navigation } from 'react-navigation'

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
}

// overall firebase ref
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp

// checks for current user
export const _getFirebaseUser = () => firebaseApp.auth().onAuthStateChanged((user) => {
	if (user) {
		console.log('Got user!', user)
		return user
	} else {
		console.log('no user')
		return null
	}
})
