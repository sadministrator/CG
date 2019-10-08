import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../style/index';

const BottomButtonsComponent = () => {
    return (
        <View style={styles.btnArray}>
            <TouchableOpacity style={styles.btnBottom}>
                <Icon name="user" size={25} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBottom}>
                <Icon name="plus-circle" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBottom}>
                <Icon name="bell" size={25} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

export default BottomButtonsComponent


const styles = StyleSheet.create({
    btnArray: {
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBottom: {
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: 16,
        textAlign: "center",
        alignItems: "center"
    }
})