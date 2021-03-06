import React, {useEffect} from 'react';
import { Container, Content, Grid} from 'native-base';
import MyHeader from "../../components/header";
import { USER_INFO, USER_TOKEN } from "../../const";
 import { getItem } from "../../utils/storage";
import { useState } from 'react/cjs/react.development';
import  SearchComponent  from "../../components/searchcomponent";
import GenericStyles from '../../styles';
export default function Home({navigation}) {
    const [userInfo, setUserInfo] = useState(null);
    useEffect(() => {
        if (!userInfo) {
            loadUserInfo();
        }
        console.log(userInfo);
    },[userInfo]);
    const loadUserInfo = async () => {
        let userInfo= await getItem(USER_INFO);
        userInfo= JSON.parse(userInfo);
       
        setUserInfo(userInfo);
    }
    return(
        <Container>
            <MyHeader ImageUri={userInfo && userInfo.photoUrl}/>
            <Content contentContainerStyle={GenericStyles.centeredContent}>
                <Grid style={GenericStyles.centeredGrid}>
            <SearchComponent navigation={navigation}/>
            </Grid>
            </Content>
          
        </Container>
    );
} 