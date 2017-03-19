import { StyleSheet } from 'react-native'

const RED_PRIMARY = '#F82312'
const YELLOW_PRIMARY = '#FFC502'
const WHITE = '#FFF3F6'

const sharedStyles = {
	container: {
		flex: 1,
		backgroundColor: RED_PRIMARY,
		alignItems: 'center',
		justifyContent: 'center',

	},
	title: {
		fontSize: 36,
		marginBottom: 20,
		color: WHITE
	},
	button: {
		backgroundColor: YELLOW_PRIMARY,
		padding: 20,
	}
}

export default sharedStyles
