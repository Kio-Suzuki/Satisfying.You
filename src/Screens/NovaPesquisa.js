import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Button } from 'react-native'
import { useState } from 'react'
import Botao from '../components/Botao'
import Botao4 from '../components/Botao4'


const NovaPesquisa = (props) => {

  const [txtNomePesquisa, setNomePesquisa] = useState('')
  const [txtDataPesquisa, setDataPesquisa] = useState('')

  const entrarHome = () => {
    props.navigation.navigate('Drawer')
  }

  return (
    <View style={estilos.view}>

        <View>
            <Text style={estilos.texto}>Nome</Text>
            <TextInput style={estilos.textInput} value={txtNomePesquisa} onChangeText={setNomePesquisa}/>

            <Text style={estilos.texto}>Data</Text>
            <TextInput style={estilos.textInput} value={txtDataPesquisa} onChangeText={setDataPesquisa}/>

            <Text style={estilos.texto}>Imagem</Text>
            <Botao4 texto='Câmera/Galeria de imagens' funcao={entrarHome}/>
        </View>

        <View style={estilos.cBotao1}>
            <Botao texto='CADASTRAR' funcao={entrarHome}/>
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

export default NovaPesquisa