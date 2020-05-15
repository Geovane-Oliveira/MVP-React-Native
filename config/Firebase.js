import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
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
