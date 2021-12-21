/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { StyleSheet } from 'react-native';
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
          // options={{
          //   title: 'Welcome',
          //   headerStyle: {
          //     backgroundColor: '#121212',
          //   },
          //   headerTintColor: '#F5F5F5',
          // }}
          options={{
            headerTitle: <ScreenTitle text='Companies' />,
            headerStyle: {
              backgroundColor: '#121212',
            }

          }}
        />
        <MainNavigator.Screen name="Profile" component={BusinessDetail} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   titleWrapper: {
//     marginTop: 80,
//     paddingHorizontal: 16,
//   },
//   largeTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   }
// })
