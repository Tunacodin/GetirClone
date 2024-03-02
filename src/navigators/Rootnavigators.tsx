import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {color} from '../../assets/colors';
import HomeNavigator from './HomeNavigator';
import Home from 'react-native-vector-icons/Entypo';
const Tab = createBottomTabNavigator();

export default function RootNavigators() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: color.main,
        tabBarInactiveTintColor: '#959595',
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeNavigator} // Burada HomeNavigator'ı içe aktardığınızdan emin olun
       
      
      />
    </Tab.Navigator>
  );
}
