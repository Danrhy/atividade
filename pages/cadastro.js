import react, {useState} from "react";
import { Text } from "react-native";
import Container from "../components/container";
import Texto from "../components/texto";
import Background from "../components/background";
import Input from "../components/input";



export default function Login(){



    return(
<Background>
<Container>
<Texto   txt={"Nome"}/>
<Input placeholder={"Digite seu Nome.:"}/>

<Texto   txt={"Email"}/>
<Input placeholder={"Digite seu Email.:"}/>
<Texto   txt={"Senha"}/>
<Input placeholder={"Digite sua Senha.:"}/>
</Container>

</Background>
    )


}