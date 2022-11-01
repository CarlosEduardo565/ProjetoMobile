import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,TouchableHighlight, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header, Card, Button} from 'react-native-elements' 
import { ScrollView } from 'react-native-gesture-handler';




export default function ListaScreen({navigation}){

  const [getData, setData] = useState([]);

  useEffect(()=>{
      
      async function resgatarDados(){
          const result = await axios(
              'http://professornilson.com/testeservico/clientes',
            );
            setData(result.data);
      }
      resgatarDados();
  }, [])

  return(
<View style={{flex:1}}>
  <Header
          
          leftComponent={
            <Button
             tittle="<"
             onPress={() => navigation.goBack()}
             ></Button>}
          centerComponent={{ text: 'lista', style: {color: '#fff', fontSize:20 }}}
          rightComponent={
            <Button
             tittle="+"
             onPress={() => navigation.navigate('CadastroContato')}
             ></Button>}
          
/>
          
 {
  getData.map((u, i) => {
    return(
      <TouchableOpacity onPress={() => navigation.navigate('EditaContato', {
        nome: u.nome,
        telefone: u.telefone,
        cpf: u.cpf,
        id: u.id,
      })}>
        <Card >
       <View key={i}>

          <Text>{u.nome}</Text>
          <Text>{u.telefone}</Text>
       </View></Card>
       </TouchableOpacity>
    );
  })
 }


</View>
 
  )
}
const styles = styleSheet.create({
  container:{
    flex:1,
  },
})