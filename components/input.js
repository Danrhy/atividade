import{TextInput, StyleSheet} from "react-native"


export default function Input({...rest}){
    return(

<TextInput style={style.input} {...rest} placeholderTextColor={"#ffff"}/>

    )
}

const style = StyleSheet.create({

input:{

    width:"80%",
    height:50,
    borderWidth:4,
    borderRadius:15,
    borderColor:"#ffff",
    color:"#ffff",
},

})