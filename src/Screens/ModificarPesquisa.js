import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Botao from '../components/Botao';
import Popup from '../components/Popup';
import { updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from './firestoeConfig';

const Modificar = (props) => {
  const { pesquisa } = props.route.params; // Recebe os dados da pesquisa

  const [txtNomePesquisa, setNomePesquisa] = useState(pesquisa.nome);
  const [txtDataPesquisa, setDataPesquisa] = useState(pesquisa.data);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const updatePesquisa = () => {
    const pesRef = doc(db, 'pesquisas', pesquisa.id);

    updateDoc(pesRef, {
      nome: txtNomePesquisa,
      data: txtDataPesquisa
    })
      .then(() => {
        Alert.alert('Pesquisa Atualizada', 'Os dados da pesquisa foram atualizados com sucesso!');
        props.navigation.goBack();
      })
      .catch((error) => {
        Alert.alert('Erro', 'Houve um erro ao atualizar a pesquisa.');
      });
  };

  const deletePesquisa = () => {
    deleteDoc(doc(db, 'pesquisas', pesquisa.id))
      .then(() => {
        Alert.alert('Pesquisa Deletada', 'A pesquisa foi removida com sucesso!');
        props.navigation.goBack();
      })
      .catch((error) => {
        Alert.alert('Erro', 'Houve um erro ao deletar a pesquisa. Contate o ');
      });
  };

  const acoes = () => {
    props.navigation.navigate('AcoesPesquisa', { pesquisa });
  };

  return (
    <View style={estilos.view}>
      <View>
        <Text style={estilos.texto}>Nome</Text>
        <TextInput style={estilos.textInput} value={txtNomePesquisa} onChangeText={setNomePesquisa} />

        <Text style={estilos.texto}>Data</Text>
        <View>
          <Icon style={estilos.calendario} name="calendar-month" size={60} color="#AAAAAA" />
          <TextInput style={estilos.textInput} value={txtDataPesquisa} onChangeText={setDataPesquisa} />
        </View>

        <Text style={estilos.texto}>Imagem</Text>
        <TouchableOpacity style={estilos.botaoImagem} onPress={acoes}>
          <Icon name="celebration" size={80} color={'#C60EB3'} />
        </TouchableOpacity>
      </View>

      <View style={estilos.containerSalvar}>
        <Botao texto="SALVAR" funcao={updatePesquisa} />
      </View>

      <View style={estilos.containerApagar}>
        <TouchableOpacity style={estilos.botaoApagar} onPress={() => deletePesquisa()}>
          <Icon name="delete" size={70} color={'#FFFFFF'} />
          <Text style={estilos.textApagar}>Apagar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
    padding: 30
  },

  texto: {
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textInput: {
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
    color: '#3F92C5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 2,
    marginBottom: 20
  },

  calendario: {
    position: 'absolute',
    right: 0,
    top: 10
  },

  botaoImagem: {
    backgroundColor: '#E9E3E3',
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerSalvar: {
    paddingTop: 20
  },

  containerApagar: {
    paddingTop: 20
  },

  botaoApagar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FD7979',
    borderRadius: 10
  },

  textApagar: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 28,
    color: '#FFFFFF',
    paddingLeft: 10
  }
});

export default Modificar;
