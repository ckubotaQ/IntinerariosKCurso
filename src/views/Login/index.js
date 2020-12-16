import React from 'react';
import { View, Text, Button} from 'react-native';
import {LOADING_PAGE,
   HOME,
} from '../../const'
export default function Login({navigation}) {
   return (<View>
      <Text>Login</Text>
      <Button title="Back a loading" onPress={()=> navigation.goBack()}/>
      <Button title="Home" onPress={()=> navigation.navigate(HOME, {id:"1233123"})}/>
   </View>);
} 