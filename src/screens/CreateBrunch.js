import React, { Component } from 'react'
import { View } from 'react-native'
import {
	Button,
	Container,
	Content,
	Footer,
	FooterTab,
	Icon,
	Text
} from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'
// import BrunchstersMap from '../components/BrunchstersMap'
import InviteFriends from '../components/InviteFriends'

class CreateBrunch extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedTab: 'map',
			selectedLocation: null,
			selectedDateTime: null,
			invitees: [],
			_showDateTimePicker: false
		}
	}

	renderSelectedTab () {
		switch (this.state.selectedTab) {
			case 'map':
				return (<Text>locations</Text>);
				break
			case 'people':
				return (<InviteFriends />)
				break
			default:
		}
	}

	render() {
		const { navigate } = this.props.navigation

		return (
			<Container>
				<Content>
					{this.renderSelectedTab()}

					<Button
						onPress={()=>this.setState({selectedTab: 'people'})}>
						<Text>Select ppl</Text>
					</Button>

					<Text>When da Brunch at?</Text>
					<Button
						onPress={this._showDateTimePicker}>
						<Text>Show TimePicker</Text>
					</Button>
					<DateTimePicker
						mode={'datetime'}
						isVisible={this.state.isDateTimePickerVisible}
						onConfirm={this._handleDatePicked}
						onCancel={this._hideDateTimePicker}
					/>
				</Content>
				<Footer>
          <FooterTab>
            <Button active={this.state.selectedTab==='map'}
               onPress={() => this.setState({selectedTab: 'map'})} >
              <Icon name="map" />
            </Button>
            <Button active={this.state.selectedTab==='people'}
               onPress={() => this.setState({selectedTab: 'people'})} >
              <Icon name="person" />
            </Button>
	          </FooterTab>
	      </Footer>
			</Container>
		)
	}

	_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

	_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

	_handleDatePicked = (date) => {
		console.log('A date has been picked: ', date)
		this._hideDateTimePicker()
	}
}

export default CreateBrunch
