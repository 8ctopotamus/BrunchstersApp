import React from 'react'
import { Text } from 'react-native'

import {
	DrawerNavigator,
	StackNavigator,
	TabNavigator
} from 'react-navigation'

import firebaseRef from './config/firebase'

import Login from './screens/Login'
import HomeScreen from './screens/HomeScreen'
import CreateBrunch from './screens/CreateBrunch'

export const HomeStack = StackNavigator({
	Login: {
		screen: Login
	},
	Home: {
		screen: HomeScreen,
		navigationOptions: {

		}
	},
	CreateBrunch: {
		screen: CreateBrunch,
		navigationOptions: {
			title: 'Create your brunch'
		}
	}
})
