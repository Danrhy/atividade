import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createDrawerNavigator } from "@react-navigation/drawer";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer} from "@react-navigation/native";
import Login from "./pagina/login";
import Cadastro from "./pagina/cadastro";
import Splash from "./pagina/splash";
import Cep from "./pagina/cep";
import Home from "./pagina/home";





export default function App(){

const Stack = createNativeStackNavigator();



return(

<NavigationContainer >    
<Stack.Navigator initialRouteName="Splash">
<Stack.Screen name="Splash" component={Splash} options={{headerTransparent:true, headerTitle:""}} />
<Stack.Screen name="Login" component={Login} options={{headerTransparent:true, headerTitle:""}}/>
<Stack.Screen name="Cadastro" component={Cadastro} options={{headerTransparent:true, headerTitle:"", headerBackVisible:false}}/>
<Stack.Screen name="Cep" component={Cep} options={{headerTransparent:true, headerTitle:"", headerBackVisible:false}}/>
<Stack.Screen name="Home" component={Home} options={{headerTransparent:true, headerTitle:"", headerBackVisible:false}}/>


</Stack.Navigator>
</NavigationContainer>



)

}




