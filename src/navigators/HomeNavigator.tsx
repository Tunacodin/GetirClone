import React from 'react';
import {View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack=createStackNavigator()
const HomeNavigator = () => {
    return <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
        >
            

      </Stack.Screen>
  </Stack.Navigator>;
};

export default HomeNavigator;
