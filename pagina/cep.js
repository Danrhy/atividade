import { Text} from "react-native";
import { useFonts } from "expo-font";



import Container from "../components/container";
import Texto from "../components/texto";
import Background from "../components/background";
import Input from "../components/input";
import Botao from "../components/buttom";



export default function Cep({ navigation }) {

         


      
    const [font] = useFonts({

        'rushon': require('../assets/fonts/Rushon Ground.ttf')
    })

    if (!font) {

        return null;

    }    


    

    

    return (
        <Background>
            <Container>
                <Text style={{ fontFamily: "rushon", color: "#ffff", fontSize: 50 }}>Busca Cep</Text>
                <Texto txt={"Cep"} />
                <Input placeholder={"Digite seu Nome.:"}  />
                <Texto txt={"Rua.:"} />
                <Texto txt={"Rua"} />
               
                <Texto txt={"Bairro.:"} />
                <Texto txt={"Bairro"} />

                <Texto txt={"Cidade.:"} />
                <Texto txt={"Cidade"} />

                <Texto txt={"Estado.:"} />
                <Texto  txt={"Estado"}/>
                
                <Botao btnTxt={"BUSCAR"} />
                <Text style={{ color: "#ffff", margin: 10 }}>Já possui cadastro...<Text onPress={() => navigation.navigate("Login")}>Clique Aqui!</Text></Text>
                
            </Container>

        </Background>
    )


}