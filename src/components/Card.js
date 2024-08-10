import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


const Card = ({ imageUrl, titulo, data, funcao }) => {
  return (
    <TouchableOpacity style={estilo.card} onPress={funcao}>
      <Image source={{ uri: imageUrl }} style={estilo.image} />
        <Text style={estilo.titutoCard}>{titulo}</Text>
        <Text style={estilo.dataCard}>{data}</Text>
    </TouchableOpacity>
  );
};const estilo = StyleSheet.create({


  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: 370,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40
  },

  titutoCard: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 28,
    color: '#3F92C5',
  },

  dataCard: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
    color: '#8B8B8B',
  },

  image: {
    width: 200,
    height: 200,
  },
})

export default Card