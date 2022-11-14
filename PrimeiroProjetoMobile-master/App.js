import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import TelaLogin from './src/telaLogin';
import ListaContato from './src/ListaContato';
import CadastroUsuario from './src/CadastroUsuario'
import CadastroContato from './src/CadastroContato'
import EditaContato from './src/EditaContato'

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
