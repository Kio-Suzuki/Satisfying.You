import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import { useState } from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Botao from '../components/Botao'

import Popup from '../components/Popup'

const Modificar = (props) => {

  const [txtNomePesquisa, setNomePesquisa] = useState('')
  const [txtDataPesquisa, setDataPesquisa] = useState('')
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const acoes = () => {
    props.navigation.navigate('AcoesPesquisa')
  }
  const excluir = () => {
    setIsPopupVisible(true);
  };


  return (
    <View style={estilos.view}>

    <View style={estilos.cNome}>
      <Text style={estilos.texto}>Nome</Text>
      <TextInput style={estilos.textInput} value={txtNomePesquisa} onChangeText={setNomePesquisa} />
  
      <Text style={estilos.texto}>Data</Text>
      <View>
        <Icon style={estilos.calendario} name="calendar-month" size={60} color="#AAAAAA" />
        <TextInput style={estilos.textInput} value={txtDataPesquisa} onChangeText={setDataPesquisa} />
      </View>
  
      <Text style={estilos.texto}>Imagem</Text>
      <TouchableOpacity style={estilos.botaoImagem} onPress={acoes}>
        <Icon name="celebration" size={80} color={'#C60EB3'}/>
      </TouchableOpacity>
    </View>
  
    <View style={estilos.cBotao1}>
      <Botao texto="SALVAR" funcao={acoes}/>
    </View>
  
    <View style={estilos.cBotao2}>
      <TouchableOpacity style={estilos.botaoApagar} onPress={excluir}>
        <Icon name="delete" size={70} color={'#FFFFFF'}/>
        <Text style={estilos.textApagar}>Apagar</Text>
      </TouchableOpacity>
    </View>
  
    {isPopupVisible && <Popup title="Confirmar Exclusão" text="Deseja realmente excluir essa pesquisa?" onClose={() => setIsPopupVisible(false)} />}
  
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
  
  texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 28,
    color: '#FFFFFF',
    marginTop: 2, 
  },

  cNome: {
    position: 'absolute',
    marginTop: 20,
    width: 807,
    marginHorizontal: 203,
  },

  cData: {
    position: 'absolute',
    marginTop: 150,
    width: 807,
    marginHorizontal: 203,
  },

  botaoImagem: {
    backgroundColor: '#FFFFFF',
    height: 94,
    width: '100%', 
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerSalvar: {
    position: 'absolute',
    marginTop: 440, 
    width: 807,
    marginHorizontal: 203,
  },

  botaoApagar: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerApagar: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },

  textApagar: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18, 
    color: '#FFFFFF',
  },

  textInput: {
    fontSize: 28,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
    color: '#3F92C5',
    paddingHorizontal: 20,
  
  },

  calendario: {
    position: 'absolute',
    zIndex: 9999,
    alignSelf: 'flex-end',
  },
});

export default Modificar