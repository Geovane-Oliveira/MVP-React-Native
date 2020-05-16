import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'

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
