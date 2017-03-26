import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'

import { Text } from 'react-native'

import HomeScreen from '../screens/HomeScreen'
import InviteFriends from '../screens/InviteFriends'
import BrunchstersMap from '../screens/BrunchstersMap'
import Planner from '../screens/Planner'

export const HomeStack = StackNavigator({
	Home: {
		screen: HomeScreen,
			navigationOptions:{
	    title: 'Home',
	  }
	}
})

export const Tabs = TabNavigator({
	Map: {
		screen: BrunchstersMap,
	},
	Planner: {
		screen: Planner,
	},
	Friends: {
		screen: InviteFriends,
	},
})
