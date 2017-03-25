import React from 'react'
import { TabNavigator } from 'react-navigation'

import { Text } from 'react-native'

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
