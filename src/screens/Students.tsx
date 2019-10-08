import React, { Component } from 'react'
import {  Text, SafeAreaView, ScrollView  } from 'react-native'

export default class Students extends Component {
  static navigationOptions = {
    title: "Students",
  }

  render() {
    
    return (
      <SafeAreaView >
      <ScrollView style={{paddingBottom: 20}} >
        <Text>HELLO FROM Students</Text>
        
      </ScrollView>
      </SafeAreaView>
    )
  }
}
