import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Input } from 'react-native-elements'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Botao from '../components/Botao'

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

        <View style={estilos.pesquisa}>
            
            <TouchableOpacity style={estilos.botao} onPress={acoesPesquisa}>
                <Icon name='devices' size={150} color={'#704141'}/>
                <Text style={estilos.texto}>SECOMP 2023</Text>
                <Text style={estilos.textoData}>10/10/2023</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={estilos.botao} onPress={acoesPesquisa}>
                <Icon name='groups' size={150} color={'#383838'}/>
                <Text style={estilos.texto}>UBUNTU 2022</Text>
                <Text style={estilos.textoData}>05/06/2022</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={estilos.botao} onPress={acoesPesquisa}>
                <Icon name='woman' size={150} color={'#D71616'}/>
                <Text style={estilos.texto}>MENINAS CPU</Text>
                <Text style={estilos.textoData}>01/04/2022</Text>
            </TouchableOpacity>   
               
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

  pesquisa:{
    backgroundColor: '#372775',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 40
  },

  texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 28,
    color: '#3F92C5',
  },

  textoData: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
    color: '#8B8B8B',
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
  }
})

export default Home