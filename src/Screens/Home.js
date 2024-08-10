import { View, TextInput, StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import Botao from '../components/Botao';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements';
import { pesquisasCollection } from '../config/firebase.js';
import { query, onSnapshot, where } from 'firebase/firestore';
import { useUsuario } from '../context/UserContext'
import Card  from '../components/Card.js';

const Home = (props) => {
  const [txtPesquisa, setPesquisa] = useState('');
  const [pesquisas, setPesquisas] = useState([]);
  const { uid } = useUsuario();
  useEffect(() => {
    const pesq = query(pesquisasCollection, where('userId', '==', uid));
    const unsubscribe = onSnapshot(pesq, (snap) => {
      const dados = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPesquisas(dados);
    });

    return () => unsubscribe();
  }, []);

  const itemPesquisa = ({ item }) => {
    return (
      <Card
        imageUrl={item.imagem}
        titulo={item.nome}
        data={item.data}
        funcao={() => props.navigation.navigate('AcoesPesquisa', { pesquisa: item })}
      />
    );
  };

  const novaPesquisa = () => {
    props.navigation.navigate('NovaPesquisa');
  };

  return (
    <View style={estilos.view}>
      <TextInput
        style={estilos.textInput}
        placeholder="Pesquisar"
        value={txtPesquisa}
        onChangeText={setPesquisa}
      />
      <View style={{marginTop: 60}}>
        <FlatList
          horizontal
          data={pesquisas}
          renderItem={itemPesquisa}
          keyExtractor={item => item.id}
          />
      </View>
      <Botao style={estilos.cBotao1} funcao={novaPesquisa} texto="Nova Pesquisa" />
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
