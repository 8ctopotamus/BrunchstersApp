import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import DateTimePicker from 'react-native-modal-datetime-picker'
import sharedStyles from '../utils/shared-styles'

class PlanBrunch extends Component {
	state = {
    isDateTimePickerVisible: false,
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker()
  }

	render() {
		return (
			<View style={sharedStyles.container}>
				<Text style={sharedStyles.title}>When da Brunch at?</Text>
        <TouchableOpacity
					style={sharedStyles.button}
					onPress={this._showDateTimePicker}>
          <Text>Show TimePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
					mode={'datetime'}
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
		)
	}
}

export default PlanBrunch
