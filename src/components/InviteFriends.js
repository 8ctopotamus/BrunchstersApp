import React, { Component } from 'react'
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native'

import sharedStyles from '../utils/shared-styles'

class InviteFriends extends Component {
	render() {
		return (
			<View style={sharedStyles.container}>
				<Text style={[sharedStyles.title]}>Invite Brunchsters</Text>
			</View>
		)
	}
}

export default InviteFriends
