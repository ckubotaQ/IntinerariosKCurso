    
import React from 'react';
import { View, Text, Button} from 'react-native';
import {
    LOGIN
} from '../../const'
export default function LoadingPage({navigation}) {
    return (<View><Text>Loading Page</Text>
    <Button title="Llevame a casa" onPress={() => navigation.navigate(LOGIN) }/>
    
    </View>);
} 