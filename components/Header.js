import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = (text) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text>{text}</Text>
            </View>
            <View style={styles.divider} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleWrapper: {
        marginTop: 80,
        marginHorizontal: 16,
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#A9ABB1',
        marginTop: 16,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})
