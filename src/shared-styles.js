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
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 36,
		marginBottom: 20,
	},
	button: {
		padding: 20,
	}
})

export default sharedStyles
