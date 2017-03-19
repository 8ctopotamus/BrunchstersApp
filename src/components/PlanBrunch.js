import React, { Component } from 'react'
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native'

import sharedStyles from '../utils/shared-styles'

class PlanBrunch extends Component {
	render() {
		return (
			<View style={sharedStyles.container}>
				<Text style={[sharedStyles.title]}>Have You Tried...</Text>

				<Text>List of places</Text>
			</View>
		)
	}
}

export default PlanBrunch
