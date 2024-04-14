import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'
import Botao from '../components/Botao'
import validator from 'validator'

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

      <View style={estilos.cBotao1}>
        <Botao texto="RECUPERAR" funcao={login} />
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
    paddingHorizontal: 203,
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

  cBotao1: {
    marginTop:100
  }
})

export default RecuperarSenha