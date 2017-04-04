import Expo from 'expo';
import React, { Component } from 'react'
import firebaseApp from './src/config/firebase'
import { HomeStack } from './src/router'
import Login from './src/screens/Login'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
    	isReady: false,
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })

    this.setState({isReady: true})
  }

  render() {
      if (!this.state.isReady) return <Expo.AppLoading />


      return <Login/>

      return (
          <HomeStack />
      )
    }
  }
