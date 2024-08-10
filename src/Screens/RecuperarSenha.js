import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { useState } from 'react'
import Botao from '../components/Botao'
import validator from 'validator'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../config/firebase'


const RecuperarSenha = (props) => {

  const [txtEmail, setEmail] = useState('')
  const [showError, setShowError] = useState();


  const recuperarSenha = () => {
    sendPasswordResetEmail(auth, txtEmail).then(() => {
      props.navigation.navigate('Login');
    }).catch((erro) => {
      switch(erro){
        case "auth/invalid-email":
          setShowError("E-mail inválido.")
          break;
        case "auth/user-not-found":
          setShowError("E-mail não cadastrado")
          break;
        default:
          setShowError("Ocorreu um erro, tente novamente mais tarde.")
          break;
      }
    })
  }

  return (
    <View style={estilos.view}>
      <View>
        <Text style={estilos.texto}>E-mail</Text>
        <TextInput style={estilos.textInput} value={txtEmail} onChangeText={setEmail} />
        {showError ? <Text style={estilos.erro}>{showError}</Text> : null}
      </View>

      <View style={estilos.cBotao}>
        <Botao texto="RECUPERAR" funcao={recuperarSenha} />
      </View>

    </View>
  )
}

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 150,
    paddingHorizontal: 203
  },

  texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 28,
    color: '#FFFFFF'
  },

  erro:{
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    color: '#FD7979',
    marginTop: 5
  },

  textInput: {
    fontSize: 28,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
    color: '#3F92C5',
    paddingHorizontal: 20,
  },

  cBotao: {
    position: 'absolute',
    marginTop: 320,
    width: 807,
    marginHorizontal: 203
  },

})

export default RecuperarSenha