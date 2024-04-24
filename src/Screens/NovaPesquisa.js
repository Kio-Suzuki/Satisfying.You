import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Button } from 'react-native'
import { useState } from 'react'
import Botao from '../components/Botao'
import Botao4 from '../components/Botao4'

import validator from 'validator'
import Icon from 'react-native-vector-icons/MaterialIcons'

const NovaPesquisa = (props) => {

  const [showError, setShowError] = useState(0);
  
  const [txtNomePesquisa, setNomePesquisa] = useState('')
  const [txtDataPesquisa, setDataPesquisa] = useState('')

  const regData = /^\d{2}\/\d{2}\/\d{4}$/;



  const novaPesquisa = () => {
    var validaNomePesquisa = !validator.isEmpty(txtNomePesquisa)
    var validaDataPesquisa = regData.test(txtDataPesquisa)
    if (validaNomePesquisa && validaDataPesquisa) {
      props.navigation.navigate('Drawer')
    } else if (validaNomePesquisa === false && validaDataPesquisa === true) {
      setShowError(1)
    } else if (validaNomePesquisa === true && validaDataPesquisa === false) {
      setShowError(2)
    } else if (validaNomePesquisa === false && validaDataPesquisa === false) {
      setShowError(3)
    }
  }

  return (
    <View style={estilos.view}>

      <View style={estilos.cNome}>
        <Text style={estilos.texto}>Nome</Text>
        <TextInput style={estilos.textInput} value={txtNomePesquisa} onChangeText={setNomePesquisa} />
        {showError === 1 ? <Text style={estilos.erro}>Preencha o nome da pesquisa</Text> : null}
        {showError === 3 ? <Text style={estilos.erro}>Preencha o nome da pesquisa</Text> : null}
      </View>

      <View style={estilos.cData}>
        <Text style={estilos.texto}>Data</Text>
        <TextInput style={estilos.textInput} value={txtDataPesquisa} onChangeText={setDataPesquisa} />
        {showError === 2 ? <Text style={estilos.erro}>Preencha a data</Text> : null}
        {showError === 3 ? <Text style={estilos.erro}>Preencha a data</Text> : null}
      </View>

      <View style={estilos.cBotao1}>
        <Text style={estilos.texto}>Imagem</Text>
        <Botao4 texto="Câmera/Galeria de imagens" funcao={novaPesquisa} />
      </View>

      <View style={estilos.cBotao2}>
        <Botao texto="CADASTRAR" funcao={novaPesquisa} />
      </View>

    </View>
  )
}

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 203,
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
    marginTop: 2
  },
  erro:{
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    color: '#FD7979',
    marginTop: 5,
  },
  cNome: {
    position: 'absolute',
    marginTop: 20,
    width: 807,
    marginHorizontal: 203
  },
  cData: {
    position: 'absolute',
    marginTop: 150,
    width: 807,
    marginHorizontal: 203
  },
  cBotao1: {
    position: 'absolute',
    marginTop: 270,
    width: 807,
    marginHorizontal: 203
  },
  cBotao2: {
    position: 'absolute',
    marginTop: 440,
    width: 807,
    marginHorizontal: 203
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