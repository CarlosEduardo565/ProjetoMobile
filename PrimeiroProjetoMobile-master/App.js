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
      <Stack.Screen name="telaLogin" component={TelaLogin} />
      <Stack.Screen name="ListaContato" component={ListaContato} />
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
      <Stack.Screen name="CadastroContato" component={CadastroContato} />
      <Stack.Screen name="EditaContato" component={EditaContato} />
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
