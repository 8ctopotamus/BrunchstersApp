import { StyleSheet } from 'react-native'
import { RED, YELLOW, WHITE } from './colors'

const sharedStyles = {
	fullscreen: {
		flex: 1
	},
	centered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
	container: {
		flex: 1,
		backgroundColor: RED,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 36,
		marginBottom: 20,
		color: WHITE
	},
	button: {
		backgroundColor: YELLOW,
		padding: 20,
	}
}

export default sharedStyles
