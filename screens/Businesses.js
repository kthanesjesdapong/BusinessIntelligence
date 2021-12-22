import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Data from '../data.json';
import SingleBusiness from '../components/SingleBusiness'

export default function Businesses() {


  return (

    <FlatList
      keyExtractor={(item) => item.id}
      data={Data}
      renderItem={({ item }) => (
        <SingleBusiness
          name={item.name}
          address={item.location.address}
          city={item.location.city}
          country={item.location.country} />
      )} />
  )
}

