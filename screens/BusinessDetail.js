import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function BusinessDetail({ navigation, route, loading }) {
  const routeName = route.name;
  const { name, address, city, country, revenue } = route.params;
  console.log(route);

  return (
    <View>
      <Text>
        Hello World
      </Text>
    </View>
  )
}