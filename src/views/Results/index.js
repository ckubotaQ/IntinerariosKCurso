import React from 'react';
import { View, Text} from 'react-native';
import {getIntinerarios} from '../../redux/actions/intinerarios'; 
export default function Results({route,navigation}) {
 const {params :{ 
     adults,
     childs, 
     destinationPlace,
     originPlace,
     inboundDate,
     outboundDate

 }} = route
    return(<View><Text>Results</Text></View>);
} 