import React, { Component } from 'react'

import {
	StatusBar,
	Text,
	View
} from 'react-native'
import ActionButton from 'react-native-action-button'
import { Card, Button, Icon } from 'react-native-elements'
import sharedStyles from '../utils/shared-styles'

class HomeScreen extends Component {
	render() {
		const { navigate } = this.props.navigation

		return (
			<View style={sharedStyles.container}>
				<StatusBar
          hidden={true}
        />
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
				<ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => navigate('PlannerTabs')}>
				</ActionButton>
			</View>
		)
	}
}

export default HomeScreen
