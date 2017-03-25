import React from 'react'
import { TabNavigator } from 'react-navigation'

import { Text } from 'react-native'

import InviteFriends from '../screens/InviteFriends'
import RecommendationsMap from '../screens/RecommendationsMap'
import Planner from '../screens/Planner'

export const Tabs = TabNavigator({
	Map: {
		screen: RecommendationsMap,
	},
	Planner: {
		screen: Planner,
	},
	Friends: {
		screen: InviteFriends,
	},
})
