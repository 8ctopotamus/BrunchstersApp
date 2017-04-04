import React, { Component } from 'react'

import {
	ListView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'

import Friend from './Friend'
import sharedStyles from '../shared-styles'

class InviteFriends extends Component {
	constructor() {
		super()

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };

		fetch('https://randomuser.me/api/?results=100')
			.then(res => res.json())
			.then(json => {
				this.setState({
	        dataSource: this.state.dataSource.cloneWithRows(json.results),
	        loaded: true
	      })
			})
	}

	render() {
		const { dataSource, loaded } = this.state

		if (!loaded) return ( <Text>Loading...</Text> )

		return (
			<View>
				<Text>Invite Brunchsters</Text>

				<ListView contentContainerStyle={styles.listView}
					dataSource={dataSource}
					renderRow={friend => <Friend key={friend.name.first} data={friend} />} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	listView: {
		flexDirection: 'row',
    flexWrap: 'wrap',
	}
})

export default InviteFriends
