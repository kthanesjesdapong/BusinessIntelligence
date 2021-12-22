import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const SingleBusiness = ({ name, address, city, country }) => {
    return (
        <TouchableOpacity>
            <View style={styles.itemWrapper}>
                <View style={styles.leftWrapper}>
                    <View style={styles.leftInfoWrapper}>
                        <Text style={styles.companyName}>
                            {name}
                        </Text>
                        <Text style={styles.companyAddress}>
                            {address}
                        </Text>
                    </View>
                </View>
                <View style={styles.rightWrapper}>
                    <Text style={styles.companyCity}>
                        {city}
                    </Text>
                    <Text style={styles.companyCountry}>
                        {country}
                    </Text>
                </View>
            </View>
            <View style={styles.divider} />
        </TouchableOpacity>
    )
}

export default SingleBusiness

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 8,
        paddingTop: 16,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftInfoWrapper: {
        marginLeft: 8,
    },
    companyName: {
        fontSize: 18,
    },
    companyAddress: {
        fontSize: 14,
    },
    rightWrapper: {
        alignItems: 'flex-end',
    },
    companyCity: {
        fontSize: 13,
    },
    companyCountry: {
        fontSize: 13,
    },
    divider: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'grey',
        marginHorizontal: 9,
        // borderBottomColor: 'red',
    }
})
