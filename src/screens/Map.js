import React, { Component } from 'react'
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native'

import sharedStyles from '../utils/shared-styles'

class Map extends Component {
	render() {
		return (
			<View style={sharedStyles.container}>
				<Text style={[sharedStyles.title]}>Map of suggested places</Text>
			</View>
		)
	}
}

export default Map
