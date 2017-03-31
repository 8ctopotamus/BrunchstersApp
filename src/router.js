import React from 'react'
import { Text } from 'react-native'

import {
	DrawerNavigator,
	StackNavigator,
	TabNavigator
} from 'react-navigation'

import HomeScreen from './screens/HomeScreen'
import CreateBrunch from './screens/CreateBrunch'

export const HomeStack = StackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			header: {
				left: <Text style={{marginLeft: 20}}>Logo</Text>,
				right: <Text style={{marginRight: 20}}>Menu</Text>
			}
	  }
	},
	CreateBrunch: {
		screen: CreateBrunch,
		navigationOptions: {
			title: 'Create your brunch'
		}
	}
})
