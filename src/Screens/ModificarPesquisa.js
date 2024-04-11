import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Button } from 'react-native'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Botao from '../components/Botao'

const Modificar = (props) => {

  const [txtNomePesquisa, setNomePesquisa] = useState('')
  const [txtDataPesquisa, setDataPesquisa] = useState('')

  const acoes = () => {
    props.navigation.navigate('AcoesPesquisa')
}

  return (
    <View style={estilos.view}>

        <View>
            <Text style={estilos.texto}>Nome</Text>
            <TextInput style={estilos.textInput} value={txtNomePesquisa} onChangeText={setNomePesquisa}/>

            <Text style={estilos.texto}>Data</Text>
            <TextInput style={estilos.textInput} value={txtDataPesquisa} onChangeText={setDataPesquisa}/>

            <Text style={estilos.texto}>Imagem</Text>
            <TouchableOpacity style={estilos.bimagem} onPress={acoes}>
                <Icon name='celebration' size={80} color={'#C60EB3'}/>
            </TouchableOpacity>

        </View>

        <View style={estilos.cBotao1}>
            <Botao texto='SALVAR' funcao={acoes}/>
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
  },
  bimagem: {
    backgroundColor: '#FFFFFF',
    height: 94,
    width: 335,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default Modificar