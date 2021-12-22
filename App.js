/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Businesses from './screens/Businesses';
import BusinessDetail from './screens/BusinessDetail';
import ScreenTitle from './components/ScreenTitle';


const MainNavigator = createStackNavigator();

const App = () => {

  const s = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <NavigationContainer>
      <MainNavigator.Navigator>
        <MainNavigator.Screen name='Home'
          component={Businesses}
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


//          component={Businesses}