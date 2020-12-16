import React from 'react';
import { View, Text} from 'react-native';
 
export default function Home({route}) {
    const {id} = route.params;
    console.log(route);
    return(<View>
        <Text>Home</Text>
        <Text>Hola {id}</Text>
    </View>);
} 