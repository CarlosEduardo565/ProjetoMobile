import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import TelaLogin from './src/telaLogin';
import ListaContato from './src/ListaContato';
import CadastroUsuario from './src/CadastroUsuario'
import CadastroContato from './src/CadastroContato'
import EditaContato from './src/EditaContato'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA0UAQjYbdwXNmCbwOrC_WFXFDsJQde2O8",
  authDomain: "projetomobile-14199.firebaseapp.com",
  projectId: "projetomobile-14199",
  storageBucket: "projetomobile-14199.appspot.com",
  messagingSenderId: "431275487081",
  appId: "1:431275487081:web:669f9e82be88faf26657f8",
  measurementId: "G-0ENDBQWS06"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="telaLogin" component={TelaLogin} options={{ headerShown: false }} />
      <Stack.Screen name="ListaContato" component={ListaContato} options={{ headerShown: false }} />
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} options={{ headerShown: false }}/>
      <Stack.Screen name="CadastroContato" component={CadastroContato} options={{ headerShown: false }}/>
      <Stack.Screen name="EditaContato" component={EditaContato} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function app() {
  return(
    
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
