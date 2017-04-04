import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import {
	Button,
	Container,
	Content,
	Text,
	Form,
	Item,
	Label,
	Input
} from 'native-base'
import firebaseApp from '../config/firebase'

export default class Login extends Component {
	state = {
		mode: 'log_in'
	}

	render() {
    // const { navigate } = this.props.navigation

		return (
			<Container>
				<Content>
					<Text>{this.state.mode}</Text>
					<Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
						<Item floatingLabel last>
							<Label>Email</Label>
							<Input />
						</Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>

						<Button block onPress={this.handleFormSubmit.bind(this)}>
							<Text>{this.state.mode === 'log_in' ? 'Log In' : 'Create User'}</Text>
						</Button>
          </Form>

					<Button
						light
						block
						onPress={() => {
							this.state.mode === 'log_in' ?
								this.setState({mode: 'create_user'}) :
								this.setState({mode: 'log_in'})
						}}>
						<Text>{this.state.mode === 'log_in' ? 'Create Account' : 'Already have an account? Log in.'}</Text>
					</Button>
				</Content>
			</Container>
		)
	}

	handleFormSubmit() {
		// Log in
		if (this.state.mode === 'log_in') {
			console.log('Logging in...')
		} else if (this.state.mode === 'create_user') {
			// Create User
			console.log('Createing user...')
			// this.state.mode === 'create_user'
			//firebaseApp.auth().createUserWithEmailAndPassword
		}
	}

}
