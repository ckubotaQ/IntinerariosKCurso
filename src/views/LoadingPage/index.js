    
import React, {useEffect} from 'react';

import { Spinner, Container, Content, Grid } from "native-base";
import {
    LOGIN, 
    HOME, USER_TOKEN
} from '../../const'
import styles from "./styles";
import { getItem } from '../../utils/storage';
export default ({navigation}) => {
    useEffect(() => {
       redirect();
       
    });
    const redirect = async () => {
        const token = await getItem(USER_TOKEN);
        console.log(token);
        let route = LOGIN;
        if (token){
            route=HOME;
        }
        navigation.navigate(route);
    }   
    return ( <Container>
        <Content contentContainerStyle= {styles.content}>
            <Grid style={styles.Grid}>
            <Spinner color="Green"/>
            </Grid>
        </Content>
    </Container> );
};
