import { View, TextInput, StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import Botao from '../components/Botao';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements';
import { pesquisasCollection } from './firestoeConfig';
import { query, onSnapshot } from 'firebase/firestore';

const Home = (props) => {
  const [ListaPesquisas, setListaPesquisas] = useState([]);

  useEffect(() => {
    const q = query(pesquisasCollection);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const pesquisas = [];
      snapshot.forEach((pes) => {
        pesquisas.push({
          id: pes.id,
          ...pes.data()
        });
      });

      setListaPesquisas(pesquisas);
    });

    return () => unsubscribe();
  }, []);

  const itemPesquisa = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => props.navigation.navigate('AcoesPesquisa', { pesquisa: item })}>
        <Text>Id: {item.id} Data: {item.data} Nome: {item.nome}</Text>
      </TouchableOpacity>
    );
  };

  const [txtPesquisa, setPesquisa] = useState('');

  const novaPesquisa = () => {
    props.navigation.navigate('NovaPesquisa');
  };

  return (
    <View style={estilos.view}>
      <View>
        <TextInput
          style={estilos.textInput}
          value={txtPesquisa}
          onChangeText={setPesquisa}
          inlineImageLeft="search"
          inlineImagePadding={5}
          placeholder="Insira o termo de busca..."
        />
      </View>

      <View style={estilos.cards}>
        <FlatList
          data={ListaPesquisas}
          renderItem={itemPesquisa}
          keyExtractor={(pesquisas) => pesquisas.id}
        />
      </View>

      <View style={estilos.cBotao1}>
        <Botao texto='NOVA PESQUISA' funcao={novaPesquisa} />
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    flexDirection: 'column',
    padding: 30
  },

  cards: {
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
  }
});

export default Home;
