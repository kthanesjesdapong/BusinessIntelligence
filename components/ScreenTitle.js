import React from 'react'
import { FlatList, Text, StyleSheet, View } from 'react-native';

export default function ScreenTitle({ text }) {
    return (
        <View style={styles.container}>
            <Text style={styles.largeTitle}>
                {text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    largeTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#F5F5F5',
    },

})