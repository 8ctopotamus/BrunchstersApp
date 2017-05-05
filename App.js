import Expo from 'expo';
import React, { Component } from 'react'

import firebaseRef from './src/config/firebase'

import { HomeStack } from './src/router'
import Login from './src/screens/Login'

export default class App extends Component {
  state = {
    isReady: false,
    initialRoute: 'Login'
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })

    // await firebaseRef.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({initialRoute: 'Home'})
    //
    //     alert('User is logged in! ' + this.state.initialRoute)
    //   }
    // })

    this.setState({isReady: true})
  }

  render() {
      if (!this.state.isReady) return <Expo.AppLoading />

      return <HomeStack />
    }
  }
