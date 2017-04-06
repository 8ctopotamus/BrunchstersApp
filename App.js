import Expo from 'expo';
import React, { Component } from 'react'

import firebaseApp, { _getFirebaseUser } from './src/config/firebase'

import { HomeStack } from './src/router'
import Login from './src/screens/Login'

export default class App extends Component {
  state = { isReady: false }

  async componentWillMount() {

    // var taskA = someCall(); // Note: no await
    // var taskB = anotherCall(); // Note: no await
    //
    // // Wait for both tasks to complete.
    // await Task.WhenAll(taskA, taskB);
    //
    // // Retrieve the results.
    // var resultA = taskA.Result;
    // var resultB = taskB.Result;



    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })

    let user = _getFirebaseUser()
    await user

    this.setState({isReady: true, user: user})
  }

  render() {
      if (!this.state.isReady) return <Expo.AppLoading />

      return ( <HomeStack initialRoute={this.state.user ? 'Home' : 'Login'} /> )
    }
  }
