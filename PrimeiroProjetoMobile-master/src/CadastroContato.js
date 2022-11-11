import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import logo from '../assets/usuario.png'
import Icon from 'react-native-vector-icons/AntDesign'

export default function CadastroUsuario({ navigation }) {
    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "telaLogin", name: "ListaContato"}]
        })
    }
    function inserirDados(){

        const result =  axios.post('http://professornilson.com/testeservico/clientes', {
            nome: getNome,
            Email: getEmail,
            telefone: getTelefone
          })
          .then(function (response) {
            setNome('');
            setEmail('');
            setTelefone('');
            setId('');
            showMessage({
              message: "Registro Adicionado com Sucesso!!",
              type: "success",
            });
            //navigation.navigate('Cadastro')
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
         
    }
    

        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.view}>

                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon   style={styles.icon} name="back" size={50} color='#000' />
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
                        autoCorrect={false}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        autoCorrect={false}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Telefone'
                        autoCorrect={false}
                    />

                    <TouchableOpacity style={styles.botaoLogin}>

                        <Text style={styles.textoLogin}>Salvar</Text>
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

        },
        textoLogin: {
            fontSize: 18
        },

        textoCadastrar: {
            fontSize: 18
        },
        icon: {

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
        }
    });
