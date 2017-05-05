import React, { Component } from 'react'
import { StatusBar, } from 'react-native'

import {
	Body,
	Button,
	Card,
	CardItem,
	Container,
	Content,
	Fab,
	H2,
	H3,
	Icon,
	ListItem,
	Text
} from 'native-base'

import firebaseRef from '../config/firebase'

class HomeScreen extends Component {
	constructor() {
		super()

		this.state = {
			fabActive: false
		}
	}

	render() {
		const { navigate } = this.props.navigation

		return (
			<Container>
				<StatusBar hidden={true} />

				<Content>
					<Text>Have you tried...</Text>

					<Button onPress={() => {
						firebaseRef.auth()
						.signOut()
						.then(() => { navigate('Login') })
						.catch((err) => { alert(err) })
					}}>
						<Text>Log out</Text>
					</Button>

					<Card>
						<CardItem>
	            <Body>
	              <H3>BRUNCH HERE</H3>
	            </Body>
	          </CardItem>

						<CardItem>
							<Button onPress={() => navigate('CreateBrunch')}>
								<Text>BRUNCH HERE</Text>
							</Button>
						</CardItem>
					</Card>
				</Content>

				<Fab
          active={this.state.fabActive}
          direction="up"
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => navigate('CreateBrunch')}>
          <Icon name="add" />
	      </Fab>
			</Container>
		)
	}
}

export default HomeScreen
