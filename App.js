import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createDrawerNavigator } from "@react-navigation/drawer";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import Login from "./pagina/login";
import Cadastro from "./pagina/cadastro";



export default function App(){

const Stack = createNativeStackNavigator();



return(

<NavigationContainer >
<Stack.Navigator initialRouteName="Login" >
<Stack.Screen name="Login" component={Login} />
<Stack.Screen name="Cadastro" component={Cadastro} />
</Stack.Navigator>
</NavigationContainer>



)

}




