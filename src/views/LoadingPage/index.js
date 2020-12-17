    
import React, {useEffect} from 'react';
import { View, Text, Button,} from 'react-native';
import { Spinner, Container, Content, Grid } from "native-base";
import {
    LOGIN
} from '../../const'
import styles from "./styles";
export default ({navigation}) => {
    useEffect(() => {
        navigation.navigate(LOGIN);
    });
   
    return ( <Container>
        <Content contentContainerStyle= {styles.content}>
            <Grid style={styles.Grid}>
            <Spinner color="Green"/>
            </Grid>
        </Content>
    </Container> );
};
