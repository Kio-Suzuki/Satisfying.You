import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Botao from '../components/Botao'
import Botao2 from '../components/Botao2'
import Botao3 from '../components/Botao3'

const Login = (props) => {

  const [txtEmail, setEmail] = useState('')
  const [txtSenha, setSenha] = useState('')

  const entrarHome = () => {
    props.navigation.navigate('Drawer')
  }

  const novaConta = () => {
    props.navigation.navigate('NovaConta')
  }

  const recuparConta = () => {
    props.navigation.navigate('RecuperarConta')
  }

  return (
    <View style={estilos.view}>

      <View style={estilos.cTitulo}>
        <Text style={estilos.titulo}>Satisfying.you</Text>
        <Icon name='sentiment-satisfied' size={75} color='#FFFFFF'/>
      </View>

      <View>
        <Text style={estilos.texto}>E-mail</Text>
        <TextInput style={estilos.textInput} keyboardType="email-address" value={txtEmail} onChangeText={setEmail}/>

        <Text style={estilos.texto}>Senha</Text>
        <TextInput style={estilos.textInput} secureTextEntry={true} value={txtSenha} onChangeText={setSenha}/>
      </View>

      <View style={estilos.cBotao1}>
        <Botao texto='Entrar' funcao={entrarHome}/>
      </View>

      <View style={estilos.cBotao2}>
        <Botao2 texto='Criar minha conta' funcao={novaConta}/>
        <Botao3 texto='Esqueci minha senha' funcao={recuparConta}/>
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

export default Login