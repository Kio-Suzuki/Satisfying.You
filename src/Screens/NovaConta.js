import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'
import Botao from '../components/Botao'
import validator from 'validator'
import { Button } from 'react-native-elements'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'


const NovaConta = (props) => {
  const [showError, setShowError] = useState()
  const [txtEmail, setEmail] = useState('')
  const [txtSenha, setSenha] = useState('')
  const [txtConfirmaSenha, setConfirmaSenha] = useState('')

  const cadastrarUsuario = () => {
    var validaSenha = validator.equals(txtSenha, txtConfirmaSenha) ? true : "As senhas não coincidem.";
    if (validaSenha === true) {
      createUserWithEmailAndPassword(auth, txtEmail, txtSenha).then(() => {
        setShowError(false)
        props.navigation.navigate('Login');
      }).catch((erro) => {
        switch (erro.code) {
          case "auth/weak-password":
            setShowError("Senha Fraca! Deve conter mais que 6 dígitos")
            break;
          case "auth/invalid-email":
            setShowError("Email inválido!")
            break;
          case "auth/email-already-in-use": 
            setShowError("Email já está sendo usado!")
            break;
          default:
            setShowError("Ocorreu um erro, tente novamente mais tarde!")
            break;
        }
      })
    } else {
        setShowError(validaSenha);
    }
}

  return (
    <View style={estilos.view}>

      <View style={{width: "70%", marginTop: 40}}>
        <Text style={[estilos.texto]}>E-mail</Text>
        <TextInput style={[estilos.textInput]} keyboardType="email-address" value={txtEmail} onChangeText={setEmail} />

        <Text style={[estilos.texto]}>Senha</Text>
        <TextInput style={[estilos.textInput]} secureTextEntry={true} value={txtSenha} onChangeText={setSenha} />

        <Text style={estilos.texto}>Repetir senha</Text>
        <TextInput style={[estilos.textInput]} secureTextEntry={true} value={txtConfirmaSenha} onChangeText={setConfirmaSenha} />
        {showError ? <Text style={[estilos.erro]}> {showError} </Text> : null}
      </View>

      <View style={[estilos.cBotao, {width: "70%"}]}>
        <Botao texto="CADASTRAR" funcao={cadastrarUsuario} />
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
  cBotao: {
    marginTop: 490,
    position: "absolute"
  },

  textInput: {
    fontSize: 28,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
    color: '#3F92C5',
    justifyContent: 'center',
    alignItems: 'center',
  },

})

export default NovaConta