import React, { Component } from 'react'
import {  Text, SafeAreaView, ScrollView  } from 'react-native'

export default class Sponsees extends Component {
  static navigationOptions = {
    title: "Sponsees",
  }
  render() {
    return (
      <SafeAreaView >
        <ScrollView style={{paddingBottom: 20}} >
          <Text>Hello from Sponsee's view</Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
