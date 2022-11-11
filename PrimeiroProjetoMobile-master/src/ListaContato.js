import React, { useState, useEffect,  } from 'react';
import { StyleSheet, View, Text, TextInput,TouchableHighlight, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header, Card, Button} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';




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
            <TouchableOpacity onPress={() => navigation.goBack()}> 
            <Icon name="back" size={50} color='#000' />
            </TouchableOpacity>
          }
          centerComponent={{ text: 'Lista de Contatos', style: {color: '#fff', fontSize:20 }}}
          rightComponent={
            <TouchableOpacity onPress={() => navigation.navigate('CadastroContato')}>
              <Icon name="adduser" size={50} color='#000' />
            </TouchableOpacity>}
          
/>
          
 {
  getData.map((u, i) => {
    return(
      <TouchableOpacity onPress={() => navigation.navigate('EditaContato', {
        nome: u.nome,
        telefone: u.telefone,
        cpf: u.cpf,
        id: u.id,
        email: u.email,
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

