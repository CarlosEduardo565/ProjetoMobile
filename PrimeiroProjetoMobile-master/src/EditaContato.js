import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import logo from '../assets/usuario.png';

export default function EditaContato({ navigation }) {

    [getNome,setNome] = useState();
    [getTelefone,setTelefone] = useState();
    [getId,setId] = useState();


    useEffect(()=>{
      if(route.params){
            const { nome } =  route.params 
            const { telefone } =  route.params 
            const { id } =  route.params
            

            setNome(nome)
            setTelefone(telefone)
            setId(id)
            

      }
    },[])

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
                    <TouchableOpacity onPress={() => navigation.navigate('telaLogin')}> 
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

                <TouchableOpacity style={styles.botaoLogin} >

                    <Text style={styles.textoLogin}>Salvar</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.botaoCadastrar}>
                    <Text style={styles.textoCadastrar}>Excluir</Text>
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
        marginTop: 10,

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