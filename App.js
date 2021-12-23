/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import RootNavigator from './navigation/RootNavigator';


const App = () => {

  return (
    <RootNavigator />
  );
};

export default App;

