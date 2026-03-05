import{TouchableOpacity, StyleSheet, Text} from "react-native"


export default function Botao({btnTxt, onPress}){
    return(

<TouchableOpacity style={style.btn} onPress={onPress}><Text style={style.txt}>{btnTxt}</Text></TouchableOpacity>

    )
}

const style = StyleSheet.create({

btn:{

    width:"80%",
    height:50,
    borderWidth:4,
    borderRadius:15,
    borderColor:"#ffff",
    color:"#ffff",
    backgroundColor:"#4040407d",
    justifyContent:"center",
    alignItems:"center",
    marginTop:20,
},
txt:{

    color:"#ffff",
    fontSize:20,
}

})