import React from 'react';
import {Image} from 'react-native';
import  {Container, Content, Grid, Text, Button} from "native-base";
import {LOADING_PAGE,
   HOME,
} from '../../const'
import styles from './styles';
const GOOGLE_IMAGE = require('../../../assets/Icon_Google.png')
export default function Login() {
   return (
      <Container>
         <Content contentContainerStyle={styles.content}>
           <Grid style={styles.Grid}>
               <Text style={styles.titlelogin}>Bienvenido</Text>
               <Text style={styles.subtitleslogin}>Click aqui para inicar sesión</Text>
              <Button dark style={styles.googleBtn} >
              <Image source={GOOGLE_IMAGE} style={styles.googleIcon}/>
                  <Text>Google</Text>
                  
              </Button>
               
           </Grid>
         </Content>
      </Container>

   )
} 