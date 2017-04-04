import React from 'react'
import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'

const Friend = (props) => (
	<View style={styles.avatarContainer}>
		<Image style={styles.avatar}
		 			 source={{ uri: props.data.picture.thumbnail }}
				   onPress={() => console.log('pressed ' + props.data.name.first)} />
		<Text>
			{props.data.name.first} {props.data.name.last}
		</Text>
	</View>
)

const styles = StyleSheet.create({
	avatarContainer: {
		width: 105,
		height: 105,
		justifyContent: 'center',
		alignItems: 'center'
	},
	avatar: {
		borderWidth: 2,
		borderColor: '#FFFFFF',
		borderRadius: 50,
		height: 50,
		width: 50
	},
})

export default Friend
