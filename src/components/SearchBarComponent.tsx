import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Item, Input, Icon, View } from 'native-base'
import COLORS from '../style/index'

interface SearchBarProps {
  callback: any
}
interface SearchBarState {
  borderColor: string
}

export default class SearchBarComponent extends Component<SearchBarProps, SearchBarState> {
  state = { borderColor: COLORS.blurBorder }
  
  onFocus = () => { 
    this.setState({ borderColor: COLORS.focusBorder })
  }

  onBlur = () => { 
    this.setState({ borderColor: COLORS.blurBorder })
  }
  
  render() {
    return (
      <View style={[styles.container, { borderColor: this.state.borderColor }]}>
        <Item>
          <Input
            onChangeText={(text) => this.props.callback(text)}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            placeholder='Search...'
            placeholderTextColor={COLORS.placeholder}
            style={styles.inputColorText} />
          <Icon name='ios-search' style={styles.iconColor} />
        </Item>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  inputColorText: {
    color: COLORS.fontColor
  },
  iconColor: {
    color: COLORS.placeholder
  }
})