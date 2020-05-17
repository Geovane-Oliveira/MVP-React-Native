import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyBsiq_NidGhEFLY7HDAAo0L94HEusSaS8U",
  authDomain: "mvp-startup-86f14.firebaseapp.com",
  databaseURL: "https://mvp-startup-86f14.firebaseio.com",
  projectId: "mvp-startup-86f14",
  storageBucket: "mvp-startup-86f14.appspot.com",
  messagingSenderId: "965165038446",
  appId: "1:965165038446:web:2d7a0a8f068b88560edf7f",
  measurementId: "G-7BESFCDPSF"
}

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

/*
// avoid deprecated warnings
db.settings({
	timestampsInSnapshots: true
})
*/
export default Firebase
