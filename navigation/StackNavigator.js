import React from 'react'
import Businesses from '../screens/Businesses';
import BusinessDetail from '../screens/BusinessDetail';
import { createStackNavigator } from '@react-navigation/stack';



const MainNavigator = createStackNavigator();


const StackNavigator = () => {
    return (
        <MainNavigator.Navigator
            screenOptions={{ headerShown: false }}>
            <MainNavigator.Screen name='Home'
                component={Businesses}
            />
            <MainNavigator.Screen name="BusinessD" component={BusinessDetail} />
        </MainNavigator.Navigator>
    )
}

export default StackNavigator
