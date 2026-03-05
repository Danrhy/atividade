import react, {useState} from "react";
import { Image } from "react-native";
import Container from "../components/container";
import Texto from "../components/texto";
import Background from "../components/background";
import Input from "../components/input";



export default function Login(){

    return(
<Background>
<Container>
<Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/8861/8861686.png'}} style={{width:100, height:100}}/>
<Texto   txt={"Usuário"}/>
<Input placeholder={"Digite seu Usuário.:"}/>

<Texto   txt={"Senha"}/>
<Input placeholder={"Digite sua Senha.:"}/>
</Container>

</Background>
    )


}