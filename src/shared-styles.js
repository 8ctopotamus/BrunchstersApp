import { StyleSheet } from 'react-native'

const sharedStyles = StyleSheet.create({
	fullscreen: {
		flex: 1
	},
	centered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
	container: {
		flex: 1,
		backgroundColor: WHITE,
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
})

export default sharedStyles
