import React, { Component} from 'react'

import {
	StyleSheet,
} from 'react-native'

import {
	Button,
	Container,
	Content,
	Form,
	H1,
	Input,
	Item,
	Text,
	Label,
} from 'native-base'

import firebaseRef from '../config/firebase'

export default class Login extends Component {
	constructor() {
		super()

		this.state = {
			mode: 'log_in',
			username: '',
			email: '',
			password: '',
			loading: false,
		}

		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	render() {
		const { navigate } = this.props.navigation

		return (
			<Container>
				<Content>
					<H1>{this.state.mode === "log_in" ? 'Log in' : 'Create an account' }</H1>

					<Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(text) => this.setState({username: text})}
          					 value={this.state.username} />
            </Item>
						<Item floatingLabel last>
							<Label>Email</Label>
							<Input onChangeText={(text) => this.setState({email: text})}
          					 value={this.state.email} />
						</Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(text) => this.setState({password: text})}
          					 value={this.state.password} />
            </Item>
						<Button block onPress={this.handleFormSubmit}>
							<Text>{this.state.mode === 'log_in' ? 'Log In' : 'Create'}</Text>
						</Button>
          </Form>

					<Button
						light
						block
						onPress={() => this.state.mode === 'log_in' ? this.setState({mode: 'create_user'}) : this.setState({mode: 'log_in'}) }>
						<Text>{this.state.mode === 'log_in' ? 'Create Account' : 'Already have an account? Log in.'}</Text>
					</Button>
				</Content>
			</Container>
		)
	}

	handleFormSubmit() {
		const { navigate } = this.props.navigation
		let username = this.state.username.trim()
		let email = this.state.email.trim()
		let password = this.state.password.trim()

		// Log In
		if (this.state.mode === 'log_in') {
			firebaseRef.auth().signInWithEmailAndPassword(email, password)
				.then((userData) => {
	        this.setState({ loading: false })
					console.log("Login successful", userData)
					navigate('Home')
	      })
				.catch((error) => {
					this.setState({ loading: false })
	        alert('Login Failed: ' , error.message)
	    	})

		}
		// Create User
		else if (this.state.mode === 'create_user') {
			firebaseRef.auth().createUserWithEmailAndPassword(email, password)
			.then(() => {
        alert('Your account was created!')
        this.setState({
					username: '',
          email: '',
          password: '',
          loading: false
				})
				navigate('Home')
    	})
			.catch((error) => {
	      this.setState({ loading: false })
      	alert("Account creation failed: " + error.message )
    	})
		}
	}
}
