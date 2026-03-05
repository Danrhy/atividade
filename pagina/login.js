import { Image } from "react-native";
import Container from "../components/container";
import Texto from "../components/texto";
import Background from "../components/background";
import Input from "../components/input";
import Botao from "../components/buttom";


export default function Login({navigation}){

    const nav = ()=>{

        navigation.navigate("Cadastro")

    }

return(


<Background>
<Container>
<Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/8861/8861686.png'}} style={{width:100, height:100}}/>
<Texto   txt={"Usuário"}/>
<Input placeholder={"Digite seu Usuário.:"}/>

<Texto   txt={"Senha"}/>
<Input placeholder={"Digite sua Senha.:"}/>
<Botao btnTxt={"LOGIN"} onPress={nav}/>
</Container>

</Background>

)

}
