import Firebase, { db } from '../config/Firebase.js'

// define types

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'

// actions
export const updateName = name => {
	return {
		type: UPDATE_NAME,
		payload: name
	}
}


export const updateEmail = email => {
	return {
		type: UPDATE_EMAIL,
		payload: email
	}
}

export const updatePassword = password => {
	return {
		type: UPDATE_PASSWORD,
		payload: password
	}
}

export const login = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			const response = await Firebase.auth().signInWithEmailAndPassword(email, password)

			dispatch(getUser(response.user.uid))
		} catch (e) {
			alert(e)
		}
	}
}

export const getUser = uid => {
	return async (dispatch, getState) => {
		try {
			const user = await db
				.collection('users')
				.doc(uid)
				//.doc(name)
				.get()

			dispatch({ type: LOGIN, payload: user.data() })
		} catch (e) {
			alert(e)
		}
	}
}

/*
export const getUserName = name => {
	return async (dispatch, getState) => {
		try {
			const user = await db
				.collection('users')
				.doc(name)
				.get()
			dispatch({ type: LOGIN, payload: user.data() })
		} catch (e) {
			alert(e)
		}
	}
}
*/

export const signup = () => {
	return async (dispatch, getState) => {
		try {
			const { name, email, password } = getState().user
			const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
			//https://www.youtube.com/watch?v=pSG72V5aPkI
			if (response.user.uid) {
				const user = {
					uid: response.user.uid,
					email: email,
					name: name
				}

				db.collection('users')
					.doc(response.user.uid)
					.set(user)

				dispatch({ type: SIGNUP, payload: user })
			}
		} catch (e) {
			alert(e)
		}
	}
}