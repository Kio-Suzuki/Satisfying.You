import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useState } from 'react'
import Botao from '../components/Botao'
import Card from '../components/Card'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Home = (props) => {

  const [txtPesquisa, setPesquisa] = useState('')

  const novaPesquisa = () => {
    props.navigation.navigate('NovaPesquisa')
  }

  const acoesPesquisa = () => {
    props.navigation.navigate('AcoesPesquisa')
  }

  return (
    <View style={estilos.view}>

        <View>
            <TextInput style={estilos.textInput} value={txtPesquisa} onChangeText={setPesquisa} inlineImageLeft='search' inlineImagePadding={5} placeholder='Insira o termo de busca...'/>
        </View>

        <View style={estilos.cards}>
            <Card iconName='mobile' titulo='SECOMP 2023' data='10/10/2023' funcao={acoesPesquisa} iconStyle={{ color: 'red' }} />
            <Card titulo='UBUNTU 2022' data='05/06/2022' funcao={acoesPesquisa}/>
            <Card titulo='MENINAS CPU' data='01/04/2022' funcao={acoesPesquisa}/>
        </View>

        <View style={estilos.cBotao1}>
            <Botao texto='NOVA PESQUISA' funcao={novaPesquisa}/>
        </View>

    </View>
  )
}

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    flexDirection: 'column',
    padding: 30
  },

  cards:{
    backgroundColor: '#372775',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 40
  },

  botao: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10, 
    width: 310,
    height: 260,
    justifyContent: 'center',
    alignItems: 'center'   
  },

  cBotao1: {
    marginTop: 20
  },

  textInput: {
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
    color: '#3F92C5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },

})

export default Home