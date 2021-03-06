import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import { Actions } from 'react-native-router-flux'

export default class NestedTarget extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Nested Target</Text>
        <Text onPress={Actions.nestedComponent}> Go To Target</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
})
