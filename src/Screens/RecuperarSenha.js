import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { useState } from 'react'
import Botao from '../components/Botao'
import validator from 'validator'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth_mod } from '../config/firebase'

const RecuperarSenha = (props) => {
  const [email, setEmail] = useState('')

  const recoverPassword = () => {
    sendPasswordResetEmail(auth_mod, email).then(() => {
      console.log("Senha resetada com sucesso!");
    }).catch((erro) => {
      console.log("Houve um erro ao tentar recuperar a senha!");
    })
  }

  return (
    <View>
        <Text>E-mail</Text>
        <TextInput value={email} onChangeText={setEmail}></TextInput>
        <Button title='Recuperar senha' onPress={recoverPassword}></Button>
    </View>

  )
}

/*
const RecuperarSenha = (props) => {

  const [txtEmail, setEmail] = useState('')
  const [showError, setShowError] = useState(false);

  const login = () => {
    var valida = validator.isEmail(txtEmail);
    if (valida) {
      props.navigation.navigate('Login');
    } else {
      setShowError(true);
    }
  }

  return (
    <View style={estilos.view}>
      <View>
        <Text style={estilos.texto}>E-mail</Text>
        <TextInput style={estilos.textInput} value={txtEmail} onChangeText={setEmail} />
        {showError ? <Text style={estilos.erro}>E-mail parece ser inválido</Text> : null}
      </View>

      <View style={estilos.cBotao}>
        <Botao texto="RECUPERAR" funcao={login} />
      </View>

    </View>
  )
}
*/

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