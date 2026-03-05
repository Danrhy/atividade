import{Text, StyleSheet} from "react-native";
import { useFonts } from "expo-font";


export default function Texto({txt}){
    
//     const [fonts] = useFonts({

//         'spider':require('../assets/fonts/spider.ttf'),
//         'Rushon Ground':require('../assets/fonts/Rushon Ground.ttf')

//     })
// if(!fonts){

//     return null;

// }

  
    return(

<Text style={style.label}>{txt}</Text>

    )
}

const style = StyleSheet.create({

label:{

    fontSize:25,
    color:"#ffff",
    alignSelf:"flex-start",
    marginLeft:50,
    marginTop:20,


}


})