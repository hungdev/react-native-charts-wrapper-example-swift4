import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import ChartsListScreen from './app/ChartsListScreen'

export default class Example extends React.Component {
  render () {
    return (

      <ChartsListScreen />
    )
  }
}

// AppRegistry.registerComponent('Example', () => Example)
