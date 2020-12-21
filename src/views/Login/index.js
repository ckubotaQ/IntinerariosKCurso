import React from 'react';
import {Image} from 'react-native';
import  {Container, Content, Grid, Text, Button} from "native-base";
import * as Google from "expo-google-app-auth";
import {LOGIN_GOOGLE_SUCCES,
   USER_INFO,
   USER_TOKEN, HOME
} from '../../const'
import styles from './styles';
import GenericStyles from "../../styles";
import { saveItem } from '../../utils/storage';
import  env  from "../../../env";
const GOOGLE_IMAGE = require('../../../assets/Icon_Google.png');
const {iosClientId,
   androidClientId,
   iosStandaloneAppClientId,
   androidStandaloneAppClientId} = env(); 
export default function Login({navigation}) {
   
      const handleLoginPress = async () => {
         try {
         const {type,user,accessToken} = await Google.logInAsync({
           iosClientId,
           androidClientId,
           iosStandaloneAppClientId,
           androidStandaloneAppClientId
         });
         if(type==LOGIN_GOOGLE_SUCCES){
          const userResult= await saveItem(USER_INFO, JSON.stringify(user));
          const tokenResult = await saveItem(USER_TOKEN,accessToken);
          if(userResult && tokenResult){
            navigation.navigate(HOME);
          }else{
             alert("Error al iniciar sesion")
          }
        
         }
      } catch (e) {
      alert("Eror" + e);
      }
        
        };
      
  

   
   
   return (
      <Container>
         <Content contentContainerStyle={[GenericStyles.centeredContent, styles.content]}>
           <Grid style={[GenericStyles.centeredGrid ,styles.Grid]}>
               <Text style={styles.titlelogin}>Bienvenido</Text>
               <Text style={styles.subtitleslogin}>Click aqui para inicar sesión</Text>
              <Button dark style={styles.googleBtn} onPress={handleLoginPress}>
              <Image source={GOOGLE_IMAGE} style={styles.googleIcon}/>
                  <Text>Google</Text>
                  
              </Button>
               
           </Grid>
         </Content>
      </Container>

   )
} 