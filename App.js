import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import NavigationRoutes from './src';



export default function App() {
  const Stack = createStackNavigator();
    return(<NavigationRoutes/>);} 
    