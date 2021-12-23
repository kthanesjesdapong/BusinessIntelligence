import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Data from '../data.json';
import SingleBusiness from '../components/SingleBusiness'


export default function Businesses({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Markets</Text>
      </View>
      <View style={styles.divider} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={Data}
        renderItem={({ item }) => (
          <SingleBusiness
            name={item.name}
            address={item.location.address}
            city={item.location.city}
            country={item.location.country}
            navigation={navigation}
            revenue={item.revenue} />
        )} />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrapper: {
    marginTop: 80,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16
  }
})
