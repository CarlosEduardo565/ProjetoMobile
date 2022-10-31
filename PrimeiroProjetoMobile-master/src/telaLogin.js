import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import logo from '../assets/usuario.png'

export default function TelaLogin({navigation}) {

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "ListaContato", name: "CadastroUsuario"}]
    })
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.ViewLogo}>
      <Image
        source={logo}
        style={styles.ImagemLogo}
       />
      </View>

      <View style={styles.containerInput}>
        <TextInput
         style={styles.input}
         placeholder='Login'
         autoCorrect={false}
        />

        <TextInput
         style={styles.input}
         placeholder='Senha'
         autoCorrect={false}
        />

        <TouchableOpacity onPress={() => navigation.navigate("ListaContato")} style={styles.botaoLogin}>
           
          <Text style={styles.textoLogin}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("CadastroUsuario")} style={styles.botaoCadastrar}>
          <Text style={styles.textoCadastrar}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CDB79E'
    
  },
  ViewLogo: {
    flex: 1,
    justifyContent:'center',
  },
  ImagemLogo: {
    marginTop: 50,
    width: 180,
    height: 180,
  },
  containerInput: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    backgroundColor: 'white',
    padding: 10,
  },
  botaoLogin: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  textoLogin: {
    fontSize: 18
  },
  botaoCadastrar: {
    backgroundColor: 'red',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10,
  },
  textoCadastrar: {
    fontSize: 18
  }
});
