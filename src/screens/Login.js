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
		mode: 'log_in',
		username: '',
		email: '',
		password: '',
		loading: false,
	}

	render() {
    // const { navigate } = this.props.navigation

		return (
			<Container>
				<Content>
					<Text>{this.state.mode} - {this.state.username}</Text>
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
						<Button block onPress={this.handleFormSubmit.bind(this)}>
							<Text>{this.state.mode === 'log_in' ? 'Log In' : 'Create User'}</Text>
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
		// Log In
		if (this.state.mode === 'log_in') {
			firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
				.then((userData) => {
	        this.setState({ loading: false })
	        alert("Login successful" + userData);
	      })
				.catch((error) => {
					this.setState({ loading: false })
	        alert('Login Failed. Please try again');
	    	})

		}
		// Create User
		else if (this.state.mode === 'create_user') {
			firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => {
        alert('Your account was created!');
        this.setState({
          email: '',
          password: '',
          loading: false
				})
    	})
			.catch((error) => {
	      this.setState({
	        loading: false
	      })
      	alert("Account creation failed: " + error.message );
    	})
		}
	}

}
