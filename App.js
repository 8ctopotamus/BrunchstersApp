import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import InviteFriends from './src/screens/InviteFriends'
import { Drawer } from './src/utils/router'

export default class App extends React.Component {
  render() {
    return (
      <Drawer />
    )
  }
}
