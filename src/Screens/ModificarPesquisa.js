import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Botao from '../components/Botao'


const Modificar = (props) => {

  const [txtNomePesquisa, setNomePesquisa] = useState('')
  const [txtDataPesquisa, setDataPesquisa] = useState('')

  const acoes = () => {
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
            <TouchableOpacity style={estilos.botaoImagem} onPress={acoes}>
                <Icon name='celebration' size={80} color={'#C60EB3'}/>
            </TouchableOpacity>
        </View>

        <View style={estilos.containerSalvar}>
            <Botao texto='SALVAR' funcao={acoes}/>
        </View>

        <View style={estilos.containerApagar}>
            <TouchableOpacity style={estilos.botaoApagar} onPress={acoes}>
                <Icon name='delete' size={70} color={'#FFFFFF'}/>
                <Text style={estilos.textApagar}>Apagar</Text>
            </TouchableOpacity>
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

  texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 28,
    color: '#FFFFFF',
    marginTop: 25

  },

  containerSalvar: {
    paddingTop: 20
  },

  textApagar: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
    color: '#FFFFFF',
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
  
  botaoImagem: {
    backgroundColor: '#FFFFFF',
    height: 94,
    width: 335,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoApagar: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerApagar: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20
}
})

export default Modificar