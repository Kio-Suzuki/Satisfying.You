import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { db } from '../config/firebase';
import { updateDoc, doc } from 'firebase/firestore';
import { usePesquisa } from '../context/PesquisaContext'

const Coleta = (props) => {


  const { pesquisa } = usePesquisa();
  const txtNomePesquisa = pesquisa.nome;


  const goToAgradecimentos = (campo) => {
    pesquisa[campo] = pesquisa[campo] + 1;
    props.navigation.navigate('Agradecimento');
  };


  const finalPesquisa = () => {
    const pesRef = doc(db, 'pesquisas', pesquisa.id);

    updateDoc(pesRef, pesquisa)
      .then(() => {
        props.navigation.navigate('AcoesPesquisa', { pesquisa })
      })
      .catch((error) => {
        Alert.alert('Erro', 'Houve um erro ao fechar a pesquisa.');
      });
  };



  return (
    <View style={estilos.view}>

      <View>
        <TouchableOpacity style={estilos.botaoFechar} onPress={finalPesquisa}>
          <Icon name='close' size={150} color='transparent'/>
        </TouchableOpacity>
      </View>

      <View style={estilos.titulo}>
        <Text style={estilos.texto}>O que você achou do(a) {txtNomePesquisa}</Text>
      </View>

      <View style={estilos.opcoes}>
        <TouchableOpacity style={estilos.botao} onPress={() => {goToAgradecimentos("nPessimo")}}>
          <Icon name='sentiment-very-dissatisfied' size={120} color='#D71616'/>
          <Text style={estilos.textBotao}>Pessímo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao} onPress={() => {goToAgradecimentos("nRuim")}}>
          <Icon name='sentiment-dissatisfied' size={120} color='#FF360A'/>
          <Text style={estilos.textBotao}>Ruim</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao} onPress={() => {goToAgradecimentos("nNeutro")}}>
          <Icon name='sentiment-neutral' size={120} color='#FFC632'/>
          <Text style={estilos.textBotao}>Neutro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao} onPress={() => {goToAgradecimentos("nBom")}}>
          <Icon name='sentiment-satisfied' size={120} color='#37BD6D'/>
          <Text style={estilos.textBotao}>Bom</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao} onPress={() => {goToAgradecimentos("nExcelente")}}>
          <Icon name='mood' size={120} color='#25BC22'/>
          <Text style={estilos.textBotao}>Excelente</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

const estilos = StyleSheet.create({

  view: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    paddingHorizontal: 70
  },

  titulo: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 52,
    color: '#FFFFFF',
  },

  opcoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 90,
  },

  textBotao: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 38,
    color: '#FFFFFF'
  },

  center: {
    justifyContent: 'center',
    alignContent: 'center'
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  botaoFechar: {
    position: 'absolute',
    top: -180,
    right: -90,
  }
})

export default Coleta