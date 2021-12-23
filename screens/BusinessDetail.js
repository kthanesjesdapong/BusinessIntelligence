import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Card } from 'react-native-shadow-cards';

export default function BusinessDetail({ navigation, route, loading }) {
  const routeName = route.name;
  const { name, address, city, country, revenue } = route.params;

  return (
    <View style={styles.businessContainer}>
      <View style={styles.graphContainer}>
        <Text style={styles.graphText}>Graph</Text>
      </View>
      <View style={styles.placeHolder}>
        <Card style={{ height: 30, width: 150, cornerRadius: 10, elevation: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.placeHolderText}>
            Graph / History
          </Text>
        </Card>
      </View>
      <Card style={{ height: 150, width: 350, cornerRadius: 10, elevation: 8, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.businessInfoContainer}>
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>
              {name}
            </Text>
          </View>
          <View style={styles.addressWrapper}>
            <Text style={styles.address}>{address}</Text>
          </View>
          <View style={styles.locationWrapper}>
            <Text style={styles.location}>{city}, {country}</Text>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  businessContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#121212',

  },
  cardStyle: {
    height: 100,
    width: 350,
    padding: 10,
  },
  placeHolder: {
    height: 50,
    width: 200,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  placeHolderText: {
    color: 'black'
  },
  graphContainer: {
    height: 250,
    width: 380,
    backgroundColor: '#f2f3f4',
    borderRadius: 10,
    marginBottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },

  nameWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold"
  },
  addressWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  address: {
    fontSize: 16
  },
  locationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    fontSize: 16
  },
})