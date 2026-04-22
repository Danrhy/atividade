import { useState } from "react";
import axios from "axios";
import { Text, Alert } from "react-native";
import { useFonts } from "expo-font";


import Container from "../components/container";
import Texto from "../components/texto";
import Background from "../components/background";
import Input from "../components/input";
import Botao from "../components/buttom";
import { withRepeat } from "react-native-reanimated";



export default function Cadastro({ navigation }) {

const [nome, setNome] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [tel, setTel] = useState("");
const [nasc, setNasc] = useState("");
const [gen, setGen] = useState("");


    // const [font] = useFonts({

    //     'rushon': require('../assets/fonts/Rushon Ground.ttf')
    // })

    // if (!font) {

    //     return null;

    // }


    function formatApi(data){

        const [dia, mes, ano] = data.split("/");
        return `${ano}-${mes}-${dia}`;

        }


        const values = {

            nome:nome,
            email:email,
            senha:senha,
            telefone:tel,
            nascimento:formatApi(nasc),
            genero:gen,

        }

        async function Cadastrar() {

            if(nome === "" || email === "" || senha === "" || tel === "" ||nasc === "" || gen === ""){

        Alert.alert("ERRO", "Favor Preencher todos os Campos!");

            }else{

                try{

                    const response = await axios.post("http://10.0.2.2:9000/api/cadastro_usuario",values);
                    console.log(response.data);                


                    Alert.alert("Sucesso!", "Cadastro Realizado com sucesso!");
                    navigation.navigate("Login");


                }catch(error){

                console.log("ERRO", error.response.data.errors);


                }

            }
            
        }


        return (
        <Background>
            <Container>
                <Text style={{ fontFamily: "rushon", color: "#ffff", fontSize: 50 }}>Cadastro</Text>
                <Texto txt={"Nome"} />
                <Input placeholder={"Digite seu Nome.:"} value={nome} onChangeText={setNome} />
                <Texto txt={"Email"} />
                <Input placeholder={"Digite seu Email.:"} value={email} onChangeText={setEmail} />
                <Texto txt={"Senha"} />
                <Input placeholder={"Digite sua Senha.:"}  value={senha} onChangeText={setSenha}/>
                <Texto txt={"Telefone"} />
                <Input placeholder={"Telefone.:"} value={tel} onChangeText={setTel}  />
                 <Texto txt={"Nascimento"} />
                <Input placeholder={"Nascimento.:"} value={nasc} onChangeText={setNasc} />
                <Texto txt={"Genero"} />
                <Input placeholder={"Genero.:"} value={gen} onChangeText={setGen} />
                <Botao btnTxt={"CADASTRAR"} onPress={Cadastrar}/>
                <Text style={{ color: "#ffff", margin: 10 }}>Já possui cadastro...<Text onPress={() => navigation.navigate("Login")}>Clique Aqui!</Text></Text>

            </Container>

        </Background>
    )


}