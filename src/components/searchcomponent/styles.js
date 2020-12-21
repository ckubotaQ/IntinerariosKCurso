import { StyleSheet, Dimensions } from "react-native";
const {width} = Dimensions.get('window');
import { SECUNDARY_C_GREEN } from "../../const";
export default StyleSheet.create({
Form:{
    width,
    paddingLeft: width / 14,
    paddingRight: width/ 14
},
datesConteiner: {
    marginTop: 12,
    justifyContent: "space-between"
},
input: {
    marginTop: 12,
    marginBottom: 4
},
pickerConteiner: {
    marginTop: 14,
    marginBottom: 14
},
searchButton: {
    marginTop: 14,
    marginRight: 80,
    width: width/1.15,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: SECUNDARY_C_GREEN    
},
searchButtontext: {
    fontSize: 20,
    fontWeight: "bold"
},
searchIcon: {
    marginRight: -5
}
})