import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/usuario2.png';
import react from 'react';

export default function ListaContato() {
  const navigation = useNavigation();
  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "CadastroContato", name: "EditaContato" }]
    })
  }

  const DATA = [
    {
      nome: 'Marcos Andrade',
      numero: '(81) 94002 - 8922',
      id: '1'
    },
    {
      nome: 'Carlos Eduardo',
      numero: '(81) 94002 - 8922',
      id: '2'
    },
    {
      nome: 'Clovis',
      numero: '(81) 92343 - 1234',
      id: '3'
    }
  ];
  const Item = ({ item, onPress, backgroundColor, }) => (
    <View style={styles.ViewUsuario}>

      <View style={styles.ViewText}>
        <TouchableOpacity onPress={onPress} style={styles.botaoeditar}>
          <Text style={styles.TextUsuario}>{item.nome}</Text>
          <Text style={styles.numeroUsuario}>{item.numero}</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
 
    const renderItem = ({ item }) => {
      return (
      <Item item={item} 
        onPress={() => navigation.navigate("EditaContato",{
        }
      )}
      />
    )}
  

  return (
    <View>

      <View style={styles.view}>
        <View style={styles.view1}>
          <Text style={styles.textLista}>Lista de contatos</Text>
        </View>

        <View style={styles.view2}>
          <TouchableOpacity onPress={() => navigation.navigate("CadastroContato")}>
            <Icon style={styles.icon} name="adduser" size={50} color='#000' />
          </TouchableOpacity>
        </View>
      </View>

       <FlatList

         data={DATA}
         renderItem={renderItem}
         keyExtractor={item => item.id}
       />

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    position: 'relative',
    marginLeft: 50
  },
  view: {
    flexDirection: 'row', //deixar os dois lado a lado
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#35AAFF',
    height: 60,
    marginBottom: 15
  },
  textLista: {
    fontSize: 20
  },
  ViewIcone: {
    flex: 1,
    justifyContent: 'center',
  },
  IconeLogo: {
    marginTop: 200,
    width: 100,
    height: 70,
  },
  TextUsuario: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'serif',
  },
  numeroUsuario: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    fontFamily: 'serif',
  },
  ViewUsuario: {
    flexDirection: 'column',
  },
  botaoeditar: {
    backgroundColor: '#D3D3D3',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    
  }
});