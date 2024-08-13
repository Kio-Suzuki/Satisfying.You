import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { usePesquisa } from '../context/PesquisaContext'
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const AcoesPesquisa = (props) => {
  
  const { pesquisa } = usePesquisa(); // Recebe os dados da pesquisa
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: pesquisa.nome,
    });
  }, [navigation]);

  const modificar = () => {
    props.navigation.navigate('ModificarPesquisa');
  };

  const coletar = () => {
    props.navigation.navigate('Coleta');
  };

  const relatorio = () => {
    props.navigation.navigate('Relatorio');
  };

  return (
    <View style={estilos.view}>
      <TouchableOpacity style={estilos.botao} onPress={modificar}>
        <Icon name='edit' size={160} color={'#FFFFFF'} />
        <Text style={estilos.texto}>Modificar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botao} onPress={coletar}>
        <Icon name='check-box' size={160} color={'#FFFFFF'} />
        <Text style={estilos.texto}>Coletar dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botao} onPress={relatorio}>
        <Icon name='donut-large' size={160} color={'#FFFFFF'} />
        <Text style={estilos.texto}>Relatório</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  botao: {
    backgroundColor: '#312464',
    width: 310,
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 28,
    color: '#FFFFFF',
  }
});

export default AcoesPesquisa;

