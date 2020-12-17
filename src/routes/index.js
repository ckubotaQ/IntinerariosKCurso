import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import  LoadingPage  from "../views/LoadingPage";
import  Login  from "../views/Login";
import  Home  from "../views/Home";
import  Results  from "../views/Results";
import  Profile  from "../views/Profile";
import {LOADING_PAGE,
    LOGIN,
    HOME,
    RESULTS,
    PROFILE,
} from '../const'

const Stack = createStackNavigator();

export default function route() {
    return(<NavigationContainer>
        <Stack.Navigator   screenOptions={{
    headerShown: false
  }}>
            <Stack.Screen name={LOADING_PAGE} component={LoadingPage}/>
            <Stack.Screen name={LOGIN} component={Login}/>
            <Stack.Screen name={HOME} component={Home}/>
            <Stack.Screen name={RESULTS} component={Results}/>
            <Stack.Screen name={PROFILE} component={Profile}/>     
        </Stack.Navigator>
        
        </NavigationContainer>);
} 