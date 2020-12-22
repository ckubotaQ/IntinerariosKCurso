import  React  from "react";
import { Container,Content, List, ListItem, Spinner, Text } from "native-base";
import { PRIMARY_B_GREEN} from "../../const";
import styles from "./styles";
export default function FixedList({places, conteinerStyle, onItemPress}){
if (!places) {
    return <Spinner size={30} color={PRIMARY_B_GREEN} />
};
    return(
        <Container style={[styles.container, conteinerStyle]}>
            <Content>
                <List>
                    {places && places.map((place, index)=>
                    (
                        <ListItem key= {index} onPress={() =>onItemPress(place)}>
                            <Text>{place.PlaceName}</Text>
                        </ListItem>
                    )
                    
                    
                    )}


                </List>
            </Content>
        </Container>
    );
}