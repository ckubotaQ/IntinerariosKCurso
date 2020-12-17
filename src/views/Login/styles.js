import { StyleSheet, Dimensions} from "react-native";
import Constants from "expo-constants";
const {width}= Dimensions.get("window");
export default StyleSheet.create({
    content: {
        flex: 1,
       //backgroundColor: "#13DA6B",
       marginTop: Constants.statusBarHeight
    },
    Grid: {
        alignItems : "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    titlelogin: {
        fontSize: 34,
        fontWeight: "500"
    },
    subtitleslogin:{
        fontSize: 16
    },
    googleBtn: {
    marginLeft: 60,
    marginRight: 50,
      width: width/1.5,
      height: 60,
      justifyContent: "center"
    },
    googleIcon: {
       width: 40,
       height: 40

    }
})