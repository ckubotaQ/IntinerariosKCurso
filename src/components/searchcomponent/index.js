import React, {useState, useEffect} from 'react';
import { Form, Input, Item, Label, Icon, Picker} from "native-base";
import DateTimePicker from '@react-native-community/datetimepicker';
export default function SearchComponent(){
    const [originPlace, setOriginPlace] = useState('');
    const [destinationPlace, setdestinationPlace] = useState('');
    const [outboundDate, setoutboundDate ]=useState('');
    const [inboundDate, setinboundDate]=useState('');
    const [adults, setAdults] = useState("0");
    const [childs, setChilds] = useState("0");
    const handleOriginChange = text => setOriginPlace(text);
    const handleDestinationChange = text => setdestinationPlace(text);
    const handleOutboundDateChange = date => setoutboundDate(date);
    const handleInboundDateChange = date => setinboundDate(date);
    const handleAdultsChange = adults => setAdults(adults);
    const handleChildsChange= childs => setChilds(childs);
    return(
        <Form>
            <Item>
                <Icon type="FontAwesome5" name="home" />
                <Input placeholder="Origen" value={originPlace} onChangeText={handleOriginChange}/>
            </Item>
            <Item>
                <Icon name="ios-airplane"/>
                <Input placeholder="Destino" value={destinationPlace} onChangeText={handleDestinationChange}/>
            </Item>
            <Item>
                <Icon type="FontAwesome" name="calendar-plus-o"/>
                <DateTimePicker placeHolderText="Fecha de Salida" value={new Date()} onChange={handleOutboundDateChange}/>
            </Item>
            <Item>
                <Icon type="FontAwesome" name="calendar-minus-o"/>
                <DateTimePicker placeHolderText="Fecha de Regreso" value={new Date()} onChange={handleInboundDateChange}/>
            </Item>
            <Item>
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
               
            </Item>
            <Item>
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
            
        </Form>
    );
};