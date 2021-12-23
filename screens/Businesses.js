import React from 'react';
import { FlatList } from 'react-native';
import Data from '../data.json';
import SingleBusiness from '../components/SingleBusiness'


export default function Businesses({ navigation }) {
  return (
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
  )
}

