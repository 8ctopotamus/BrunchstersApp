import React, { Component } from 'react'
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native'

import sharedStyles from '../utils/shared-styles'

class HomeScreen extends Component {
	render() {
		return (
			<View style={sharedStyles.container}>
				<Text style={[sharedStyles.title]}>Logo</Text>

				<TouchableOpacity style={sharedStyles.button}>
						<Text>BRUNCH NOW!</Text>
				</TouchableOpacity>

				<TouchableOpacity>
					<Text>Plan a Brunch</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default HomeScreen
