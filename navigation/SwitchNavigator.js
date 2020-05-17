import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Welcome from '../src/screens/Welcome'
import Login from '../src/screens/Login'
import Signup from '../src/screens/Signup'
import Profile from '../src/screens/Profile'

const SwitchNavigator = createSwitchNavigator(
	{
		Welcome:{
			screen: Welcome
		},
		Login: {
			screen: Login
		},
		Signup: {
			screen: Signup
		},
		Profile: {
			screen: Profile
		}
	},
	{
		//initialRouteName: 'Login'
		initialRouteName: 'Welcome'
	}
)

export default createAppContainer(SwitchNavigator)
