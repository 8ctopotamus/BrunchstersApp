import React, { Component } from 'react'

import {
	Text,
	View
} from 'react-native'

import { Card, Button } from 'react-native-elements'
import sharedStyles from '../utils/shared-styles'

class HomeScreen extends Component {
	render() {
		return (
			<View style={sharedStyles.container}>
				<Text>Have you tried...</Text>
				<Card title='HELLO WORLD'>
					<Button
				    backgroundColor='#03A9F4'
				    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
				    title='BRUNCH HERE' />
				</Card>
				<Card title='HELLO WORLD'>
					<Button
				    backgroundColor='#03A9F4'
				    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
				    title='BRUNCH HERE' />
				</Card>
				<Card title='HELLO WORLD'>
					<Button
				    backgroundColor='#03A9F4'
				    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
				    title='BRUNCH HERE' />
				</Card>
			</View>
		)
	}
}

export default HomeScreen
