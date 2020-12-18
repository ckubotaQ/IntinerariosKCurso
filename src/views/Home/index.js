import React, {useEffect} from 'react';
import { Container, Content} from 'native-base';
import MyHeader from "../../components/header";
import { USER_INFO, USER_TOKEN } from "../../const";
 import { getItem } from "../../utils/storage";
import { useState } from 'react/cjs/react.development';
export default function Home() {
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
        </Container>
    );
} 