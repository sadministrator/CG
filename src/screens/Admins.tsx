import React, { Component } from 'react'
import {  Text, SafeAreaView, ScrollView  } from 'react-native'

export default class Admins extends Component {
  static navigationOptions = {
    title: "Admins",
  }

  render() {
    
    return (
      <SafeAreaView >
      <ScrollView style={{paddingBottom: 20}} >
        <Text>HELLO FROM Admins</Text>
        
      </ScrollView>
      </SafeAreaView>
    )
  }
}
