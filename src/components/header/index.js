import React from "react";
import { Header, Left, Body, Right, Thumbnail } from "native-base";
import { PRIMARY_B_GREEN } from "../../const";
import  Styles  from "./styles";
 export default function MyHeader ({ImageUri}) {
     return(
         <Header androidStatusBarColor={PRIMARY_B_GREEN} style={Styles.Header}>
             <Left/>
             <Body/>
             <Right>
                 <Thumbnail source={{ uri: ImageUri && ImageUri}} small/>
             </Right>
         </Header>

     );
 }