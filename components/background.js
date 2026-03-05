import{ImageBackground, StyleSheet} from "react-native"


export default function Background({children}){

    const img = require("../assets/tarefa.png")

    return(

<ImageBackground style={style.back} source={img} >{children}</ImageBackground>

    )
}

const style = StyleSheet.create({

back:{

flex:1,
}


})