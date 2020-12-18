import React from "react";
/**
 * 
 * @type {Routes}
 */
import { Header, Left, Body, Right, Thumbnail } from "native-base";
 export default function MyHeader ({ImageUri}) {
     return(
         <Header>
             <Left/>
             <Body/>
             <Right>
                 <Thumbnail source={{ uri: ImageUri && ImageUri}} small/>
             </Right>
         </Header>

     );
 }