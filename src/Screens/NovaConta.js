import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'
import Botao from '../components/Botao'

const NovaConta = (props) => {

    const login = () => {
        props.navigation.navigate('Login')
    }

    const [txtEmail, setEmail] = useState('')
    const [txtSenha, setSenha] = useState('')
    const [txtConfirmaSenha, setConfirmaSenha] = useState('')

    return (
        <View style={estilos.view}>

            <View>
                <Text style={estilos.texto}>E-mail</Text>
                <TextInput style={estilos.textInput} keyboardType="email-address" value={txtEmail} onChangeText={setEmail}/>

                <Text style={estilos.texto}>Senha</Text>
                <TextInput style={estilos.textInput} secureTextEntry={true} value={txtSenha} onChangeText={setSenha}/>

                <Text style={estilos.texto}>Repetir senha</Text>
                <TextInput style={estilos.textInput} secureTextEntry={true} value={txtConfirmaSenha} onChangeText={setConfirmaSenha}/>
            </View>

            <View style={estilos.cBotao1}>
                <Botao texto='CADASTRAR' funcao={login}/>
            </View>

    </View>
    )
}

const estilos = StyleSheet.create({
    view: {
      backgroundColor: '#372775',
      flex: 1,
      flexDirection: 'column',
      paddingHorizontal: 203
    },
  
    cTitulo: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 130
    },
    titulo: {
      fontSize: 64,
      color: '#FFFFFF',
      fontFamily: 'AveriaLibre-Regular'
    },
  
    texto: {
      fontFamily: 'AveriaLibre-Regular',
      fontSize: 28,
      color: '#FFFFFF',
      marginTop: 25
  
    },
  
    cBotao1: {
      marginTop: 20
    },
  
    cBotao2: {
      marginTop: 30
    },
  
    textInput: {
      fontSize: 28,
      fontFamily: 'AveriaLibre-Regular',
      backgroundColor: '#FFFFFF',
      color: '#3F92C5',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20
    }
  })

export default NovaConta