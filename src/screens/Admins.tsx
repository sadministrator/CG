import React, { Component } from 'react'
import { View } from 'react-native'
import ProfileCardComponent from '../components/ProfileCardComponent';
import SearchBarComponents from '../components/SearchBarComponent';
import { Container, Content, Root, Button, Text,  ActionSheet } from 'native-base';

export default class Admins extends Component {
  static navigationOptions = {
    title: 'Admins',
  }

  state = {
    adminsList: [
      {  
        id: 'ef488930-eae7-11e9-81b4-2a2ae2dbcce4',
        first_name: 'Ana Maria ',
        last_name: 'Angulo',
        number: 22,
        type: 'Sponsees',
        role: 'Admin',
        profile_picture: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        last_signed: 'Active: 10.07.19 @ 6pm'
      },
      { 
        id: ' ef488b9c-eae7-11e9-81b4-2a2ae2dbcce4',
        first_name: 'Miguel',
        last_name: 'Kane',
        number: 22,
        type: 'Sponsees',
        role: 'Admin',
        profile_picture: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        last_signed: '2 minutes ago'
      },
      { 
        id: 'ef488cf0-eae7-11e9-81b4-2a2ae2dbcce4',
        first_name: 'Lionel',
        last_name: 'Messi',
        number: 22,
        type: 'Sponsees',
        role: 'Admin',
        profile_picture: 'https://engineering.unl.edu/images/staff/Kayla_Person-small.jpg',
        last_signed: 'Active: 10.07.19 @ 2pm'
      },
    ]
  }

  renderList = () => {
    const list = this.state.adminsList.map( p => {
      return (
        <ProfileCardComponent
          id = { p.id }
          first_name = { p.first_name }
          last_name ={ p.last_name }
          number = { p.number }
          type =  {p.type }
          role = { p.role }
          profile_picture = { p.profile_picture }
          last_signed = { p.last_signed }
        />
      );
    });
    return list;
  }

  render() {
    return (
      <Root>
        <Container>
          <Content padder>
            <SearchBarComponents />
            <View style={{ paddingBottom: 20 }}></View>
            {this.renderList()}
          </Content>
        </Container>
      </Root>

    )
  }
}
