import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect,  } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity,Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import logo from '../assets/usuario.png';
import axios from 'axios';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

export default function EditaContato({ navigation, route }) {

    [getNome,setNome] = useState();
    [getTelefone,setTelefone] = useState();
    [getId,setId] = useState();
    [getEmail,setEmail] = useState();
    [getCpf,setCpf] = useState();
    

    useEffect(()=>{
        if(route.params){
              const { nome } =  route.params 
              const { telefone } =  route.params 
              const { cpf } =  route.params 
              const { id } =  route.params
              const { email } =  route.params
  
              setNome(nome)
              setTelefone(telefone)
              setCpf(cpf)
              setId(id)
              setEmail(email)
  
        }
      },[])  

     function excluirDados(){
         axios.delete('http://professornilson.com/testeservico/clientes/'+getId
        )
        .then(function (response) {
            setNome('')
            setTelefone('')
            setCpf('')
            setEmail('')
            showMessage({
                message: "Registro excluído com sucesso!",
                type: "success",
              });
          console.log(response);
        })
        .catch(function (error) {
            showMessage({
                message: "Algum erro aconteceu!",
                type: "info",
              });
            console.log(error);
        });
    }

    async function alterarDados(){
        await axios.put('http://professornilson.com/testeservico/clientes/'+getId,{
         nome:getNome,
         cpf:getCpf,
         telefone:getTelefone, 
         email:getEmail 
        }
        )
        .then(function (response) {
            showMessage({
                message: "Registro alterado com sucesso!",
                type: "success",
              });
          console.log(response);
        })
        .catch(function (error) {
            showMessage({
                message: "Algum erro aconteceu!",
                type: "info",
              });
            console.log(error);
        });
    }

    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "ListaContato" }]
        })
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.view}>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('ListaContato')}> 
                        <Icon  style={styles.icon} name="back" size={50} color='#000' />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.textLista}>Usuario</Text>
                </View>


            </View>

            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome'
                    onChangeText={text => setNome(text)}
                    value={getNome}
                    autoCorrect={false}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    onChangeText={text => setEmail(text)}
                    value={getEmail}
                    autoCorrect={false}
                />
                
                <TextInput
                    style={styles.input}
                    placeholder='Telefone'
                    onChangeText={text => setTelefone(text)}
                    value={getTelefone}
                    autoCorrect={false}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Cpf'
                    onChangeText={text => setCpf(text)}
                    value={getCpf}
                    autoCorrect={false}
                />

           
            <Button 
            title="Alterar"
            style={styles.botaoLogin}
            onPress={() => alterarDados()}
            />             
          
            
            <Button 
            title="Excluir"
            linearGradientProps={{
              colors: ['red','red', 'red'],
              }}
            style={styles.botao}
            onPress={() => excluirDados()}
            /> 
             

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ViewLogo: {
        flex: 1,
        justifyContent: 'center',
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
        marginTop: 10,
    },
    textoLogin: {
        fontSize: 18
    },

    textoCadastrar: {
        fontSize: 18
    },
    view: {
        flexDirection: 'row', //deixar os dois lado a lado
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#35AAFF',
        height: 60,
        width: 500
    },
    textLista: {
        fontSize: 20
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