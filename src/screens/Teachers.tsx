import React, { Component } from 'react'
import {  Text, SafeAreaView, ScrollView  } from 'react-native'

export default class Teachers extends Component {
  static navigationOptions = {
    title: "Teachers",
  }
  render() {
    return (
      <SafeAreaView >
        <ScrollView style={{paddingBottom: 20}} >
          <Text>Hello from Teacher's view</Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
