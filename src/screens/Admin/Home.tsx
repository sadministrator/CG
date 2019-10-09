import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import BottomButtonsComponent from '../../components/BottomButtonsComponent'
import SafeAreaView from 'react-native-safe-area-view'
import Teachers from '../Teachers'
import Students from '../Sponsees'
import Sponsors from '../Sponsors'

import Admins from '../Admins'

const AppTabNavigator = createMaterialTopTabNavigator(
    {
        Tab1: Teachers,
        Tab2: Students,
        Tab3: Sponsors,
        Tab4: Admins
    },
    {
        swipeEnabled: true,
        initialRouteName: 'Tab1',
        tabBarOptions: {
            activeTintColor: '#ffffff',
            labelStyle: {
                paddingTop: 10,
                textTransform: "capitalize",
                fontSize: 14,
            },
            style: {
                backgroundColor: '#6d70e0',
            },
            indicatorStyle: {
                backgroundColor: '#eeeeee'
            }
        }
    }
);

const Router = createAppContainer(AppTabNavigator)

export default class Home extends Component<{}, {}> {
    render() {
        return (
            <SafeAreaView style={{flex: 1, flexDirection: "column"}}>
                <Router/> 
                <BottomButtonsComponent/>
            </SafeAreaView>
        )
    }
}


