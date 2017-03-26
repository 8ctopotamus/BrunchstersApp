import React from 'react'

import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import InviteFriends from '../screens/InviteFriends'
import BrunchstersMap from '../screens/BrunchstersMap'
import Planner from '../screens/Planner'

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

export const HomeStack = StackNavigator({
	Home: {
		screen: HomeScreen,
			navigationOptions: {
	    title: 'Home',
	  }
	},
	PlannerTabs: {
		screen: Tabs
	}
})
