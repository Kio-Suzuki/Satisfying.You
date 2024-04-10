import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Botao from '../components/Botao'

const RecuperarSenha = (props) => {

    const login = () => {
      props.navigation.navigate('Login')
    }

    const [txtEmail, setEmail] = useState('')

    return (
        <View style={estilos.view}>
            <View>
                <Text style={estilos.texto}>E-mail</Text>
                <TextInput style={estilos.textInput} value={txtEmail} onChangeText={setEmail}/>
            </View>

            <View style={estilos.cBotao1}>
                <Botao texto='RECUPERAR' funcao={login}/>
            </View>

    </View>
    )
}

const estilos = StyleSheet.create({
    view: {
      backgroundColor: '#372775',
      flex: 1,
      flexDirection: 'column', 
      justifyContent: 'center',
      paddingHorizontal: 203
    },
  
    texto: {
      fontFamily: 'AveriaLibre-Regular',
      fontSize: 28,
      color: '#FFFFFF'
    },
 
    textInput: {
      fontSize: 28,
      fontFamily: 'AveriaLibre-Regular',
      backgroundColor: '#FFFFFF',
      color: '#3F92C5',
      paddingHorizontal: 20,
      marginBottom: 100
    }
  })

export default RecuperarSenha