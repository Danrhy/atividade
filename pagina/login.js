import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";



import { Image, Text, Alert } from "react-native";
import Container from "../components/container";
import Texto from "../components/texto";
import Background from "../components/background";
import Input from "../components/input";
import Botao from "../components/buttom";



export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    async function Logar() {

        if(email === "" || pass === ""){


            Alert.alert("ERRO", "Favor Preencher todos os Campos!");

        }else{

            try {


                const response = await axios.post("http://10.0.2.2:9000/api/login_novo",{

                    email:email,
                    senha:pass,

                });

                console.log(response.data);

                if(response.data.token){

                    await AsyncStorage.setItem('token',response.data.token);
                    

                Alert.alert("Sucesso", "Login Realizado com Sucesso!");
                navigation.replace("Home");

                }else{


                    Alert.alert("ERRO",response.data.msg)

                }                
                
            } catch (error) {

                console.log("ERRO", error.response.data.errors);
                
            }



        }
        
    }



    const nav = () => {
        navigation.navigate("Cadastro");
    }

    return (


        <Background>
            <Container>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/8861/8861686.png' }} style={{ width: 100, height: 100 }} />
                <Texto txt={"Email"} />
                <Input placeholder={"Digite seu Usuário.:"}  value={email} onChangeText={setEmail}/>

                <Texto txt={"Senha"} />
                <Input placeholder={"Digite sua Senha.:"} value={pass} onChangeText={setPass} />
                <Botao btnTxt={"LOGIN"} onPress={Logar} />
                <Text style={{ color: "#ffff", margin: 10 }}>Não possui cadastro...<Text onPress={nav}>Clique Aqui!</Text></Text>
            </Container>

        </Background>

    )

}
