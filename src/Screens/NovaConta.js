import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'
import Botao from '../components/Botao'
import validator from 'validator'

const NovaConta = (props) => {
  const [showError, setShowError] = useState(0);

  const login = () => {
    var validaEmail = validator.isEmail(txtEmail)
    var validaSenha = validator.equals(txtSenha, txtConfirmaSenha)
    if (validaEmail && validaSenha) {
      props.navigation.navigate('Login');
    } else if (validaEmail === false && validaSenha === true) {
      setShowError(1);
    } else if (validaEmail === true && validaSenha === false) {
      setShowError(2);
    } else if (validaEmail === false && validaSenha === false) {
      setShowError(3);
    }
  }
  const [txtEmail, setEmail] = useState('')
  const [txtSenha, setSenha] = useState('')
  const [txtConfirmaSenha, setConfirmaSenha] = useState('')

  return (
    <View style={estilos.view}>

      <View>
        <Text style={estilos.texto}>E-mail</Text>
        <TextInput style={estilos.textInput} keyboardType="email-address" value={txtEmail} onChangeText={setEmail} />

        <Text style={estilos.texto}>Senha</Text>
        <TextInput style={estilos.textInput} secureTextEntry={true} value={txtSenha} onChangeText={setSenha} />

        <Text style={estilos.texto}>Repetir senha</Text>
        <TextInput style={estilos.textInput} secureTextEntry={true} value={txtConfirmaSenha} onChangeText={setConfirmaSenha} />
        {showError === 1 ? <Text style={estilos.erro}>E-mail parece ser inválido</Text> : null}
        {showError === 2 ? <Text style={estilos.erro}>O campo repetir senha difere da senha.</Text> : null}
        {showError === 3 ? <Text style={estilos.erro}>E-mail parece ser inválido e/ou o campo repetir senha difere da senha.</Text> : null}
      </View>

      <View style={estilos.cBotao1}>
        <Botao texto="CADASTRAR" funcao={login} />
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
  erro:{
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    color: '#FD7979',
    marginTop: 5
  },
  cBotao1: {
    marginTop: 60
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