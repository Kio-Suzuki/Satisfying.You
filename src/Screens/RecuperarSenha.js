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
          setShowError("E-mail parece ser inválido")
          break;
        case "auth/user-not-found":
          setShowError("E-mail parece ser inválido")
          break;
        default:
          setShowError("E-mail parece ser inválido")
          break;
      }
    })
  }

  return (
    <View style={estilos.view}>
      <View style={estilos.container}>
        <View style={{width: '100%', marginTop: 150}}>
          <Text style={estilos.texto}>E-mail</Text>
          <TextInput style={estilos.textInput} value={txtEmail} onChangeText={setEmail} />
          {showError ? <Text style={estilos.erro}>{showError}</Text> : null}
        </View>
        <View style={[estilos.cBotao, {width: '100%'}]}>
          <Botao texto="RECUPERAR" funcao={recuperarSenha} />
        </View>
      </View>

    </View>
  )
}

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },

  texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 28,
    marginBottom: '4px',
    color: '#FFFFFF',
  },

  erro:{
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
    color: '#FD7979',
    marginTop: 5
  },

  textInput: {
    fontSize: 28,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
    color: '#3F92C5',
    width: '100%'
  },

cBotao: {
    position: 'absolute',
    marginTop: 370,
  },
  container: {
    width: '70%',
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

})

export default RecuperarSenha