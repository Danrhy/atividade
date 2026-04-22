import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ImageBackground,Image,StyleSheet, Alert } from "react-native";


export default function Splash({navigation}){



useEffect(()=>{ 
    
    const validarToken = async()=>{

        const token = await AsyncStorage.getItem('token');
        console.log("Token.:", token);


    const time = setTimeout(()=>{ 

        if(token){

            navigation.replace("Home");

        }else{

            navigation.replace("Login");

        }

   }, 3000);

   return ()=> clearTimeout(time);   



    }

    validarToken();   

    },[]);


    return(

        // <ImageBackground source={{uri:'https://marketplace.canva.com/EAE-Wz6J1HQ/1/0/900w/canva-wallpaper-celular-papel-de-parede-astronauta-aesthetic-minimalista-preto-e-branco-LWKnXxAXjSg.jpg'}}></ImageBackground>
        <ImageBackground source={require('../assets/tarefa.png')}  style={style.imgBack}>
        
   <Image source={require('../assets/logo.png')} style={style.imgLogo} />

        </ImageBackground>


    )


}

const style = StyleSheet.create({

    imgBack:{

        flex:1,
        justifyContent:"center",
        alignItems:"center"


    },
    imgLogo:{

        width:450,
        height:150,


    }


})