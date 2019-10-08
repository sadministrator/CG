import React, { Component } from 'react'
import {  Text, SafeAreaView, ScrollView  } from 'react-native'

export default class Sponsors extends Component {
  static navigationOptions = {
    title: "Sponsors",
  }

  render() {
    
    return (
      <SafeAreaView >
      <ScrollView style={{paddingBottom: 20}} >
        <Text>HELLO FROM Sponsors</Text>
        
      </ScrollView>
      </SafeAreaView>
    )
  }
}
