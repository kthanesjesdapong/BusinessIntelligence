/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Businesses from './screens/Businesses';
import BusinessDetail from './screens/BusinessDetail';
import ScreenTitle from './components/ScreenTitle';


const MainNavigator = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <MainNavigator.Navigator>
        <MainNavigator.Screen name='Home'
          component={Businesses}
          options={{
            headerTitle: <ScreenTitle text='Businesses' />,
            headerStyle: {
              backgroundColor: '#121212',
            }
          }}
        />
        <MainNavigator.Screen name="BusinessD" component={BusinessDetail}
          options={({ route }) => ({
            headerTitle: <ScreenTitle text={route.params.name} />,
            headerStyle: {
              backgroundColor: '#121212',
            }
          })} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
