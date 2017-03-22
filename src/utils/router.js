import React from 'react'
import { TabNavigator } from 'react-navigation'

import { Text } from 'react-native'

import InviteFriends from '../screens/InviteFriends'
import Map from '../screens/Map'
import Planner from '../screens/Planner'

export const Drawer = TabNavigator({
	Map: {
		screen: Map,
	},
	Planner: {
		screen: Planner,
	},
	Friends: {
		screen: InviteFriends,
	},
})
