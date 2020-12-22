import React, {useState, useEffect} from 'react';
import { Form, Input, Item, Label, Icon, Picker, DatePicker, Button, Text} from "native-base";
import  {useDispatch, useSelector}  from "react-redux";
import Styles from "./styles";
import { getLocations } from "../../redux/actions/intinerarios";
import  FixedList  from "../fixedList";
export default function SearchComponent(){
    const dispatch = useDispatch();
    const places = useSelector((state)=>state.intinerarios.places);
    const [originPlace, setOriginPlace] = useState({PlaceName: ""});
    const [destinationPlace, setdestinationPlace] = useState({PlaceName: ""});
    const [outboundDate, setoutboundDate ]=useState('');
    const [inboundDate, setinboundDate]=useState('');
    const [adults, setAdults] = useState("0");
    const [childs, setChilds] = useState("0");
    const [showOriginPlacesList,setshowOriginPlacesList] = useState(false);   
    const [showDestinationPlacesList,setshowDestinationPlacesList] = useState(false);  
    const handleOriginPlaceItemPress = (placeSelected) => {
        //to do actualiza el valor del input
        setOriginPlace(placeSelected);

        setshowOriginPlacesList(false);

    };
    const handleDestinationPlaceItemPress = (placeSelected) => {
        //to do actualiza el valor del input
        setdestinationPlace(placeSelected);
        setshowDestinationPlacesList(false);

    };
    const handleOriginChange = text => setOriginPlace({PlaceName: text});
    const handleDestinationChange = text => setdestinationPlace({PlaceName: text});
    const handleOutboundDateChange = date => setoutboundDate(date);
    const handleInboundDateChange = date => setinboundDate(date);
    const handleAdultsChange = adults => setAdults(adults);
    const handleChildsChange= childs => setChilds(childs);
    const searchButonDisable = () => {
        if (!originPlace || !destinationPlace || !outboundDate
            ||!inboundDate ||
            !adults){
                return true;
        } 
        return false;
    }
    const handleSearchButtonClick = () => {
        dispatch(getLocations());
    }
    const handleOriginKeyPress = ({nativeEvent}) => {
        if(originPlace.PlaceName.length>2){
           dispatch(getLocations({query: originPlace.PlaceName}));
           setshowOriginPlacesList(true);
        }else{
            setshowOriginPlacesList(false);
        }
       
    };
    const handleDestinationKeyPress = ({nativeEvent}) => {
        if(destinationPlace.PlaceName.length>2){
           
           dispatch(getLocations({query: destinationPlace.PlaceName}));
           setshowDestinationPlacesList(true);
           
        }else{
            setshowDestinationPlacesList(false);
        }
    };
    

    return(
        <Form style={Styles.Form}>
            <Item>
                <Icon type="FontAwesome5" name="home" />
                <Input placeholder="Origen"
                  style={Styles.input}
                  onKeyPress={handleOriginKeyPress}
                value={originPlace.PlaceName} onChangeText={handleOriginChange}/>
              
               
            </Item>
            {showOriginPlacesList &&  <FixedList places={places} conteinerStyle={{top: 50}}
                onItemPress={handleOriginPlaceItemPress}/>}
            <Item>
                <Icon name="ios-airplane"/>
                <Input placeholder="Destino" 
                style={Styles.input}
                value={destinationPlace.PlaceName} 
                onKeyPress={handleDestinationKeyPress}
                onChangeText={handleDestinationChange}/>
              
            </Item>
            {showDestinationPlacesList &&  <FixedList places={places} conteinerStyle={{top: 140}} 
                onItemPress={handleDestinationPlaceItemPress}/>}
            <Item style={Styles.datesConteiner}>
                <Icon type="FontAwesome" name="calendar-plus-o"/>
                <DatePicker placeHolderText="ida" onDateChange={handleOutboundDateChange} minimumDate={new Date()}/>
          
                <Icon type="FontAwesome" name="calendar-minus-o"/>
                <DatePicker placeHolderText="Fecha de Regreso"  onDateChange={handleInboundDateChange} minimumDate={outboundDate}/>
            </Item>
            <Item style={Styles.pickerConteiner}>
            <Icon type="MaterialIcons" name="person-add"/>
                <Picker selectedValue={adults} onValueChange={handleAdultsChange}>
                <Picker.Item selected label= "1" value="1"/>
                <Picker.Item selected label= "4" value="2"/>
                <Picker.Item selected label= "5" value="3"/>
                <Picker.Item selected label= "8" value="4"/>
                <Picker.Item selected label= "7" value="5"/>
                <Picker.Item selected label= "6" value="6"/>
                <Picker.Item selected label= "Adultos" value="0"/>
                    
                </Picker>
               
           
            <Icon type="FontAwesome5" name="child"/>
                <Picker selectedValue={childs} onValueChange={handleChildsChange}>
                <Picker.Item selected label= "1" value="1"/>
                <Picker.Item selected label= "4" value="2"/>
                <Picker.Item selected label= "5" value="3"/>
                <Picker.Item selected label= "8" value="4"/>
                <Picker.Item selected label= "7" value="5"/>
                <Picker.Item selected label= "6" value="6"/>
                <Picker.Item selected label= "Niños" value="0"/>
                    
                </Picker>
               
            </Item>
            <Button style={Styles.searchButton} disabled={searchButonDisable()} onPress={handleSearchButtonClick}>
                <Icon type="FontAwesome" name="search" style={Styles.searchIcon} />
                <Text style={Styles.searchButtontext}>Buscar</Text>
            </Button>
        </Form>
    );
};