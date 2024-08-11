import { Text, TouchableOpacity, StyleSheet, Image,View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


const Card = ({ imageUrl, titulo, data, funcao }) => {
  return (
    <TouchableOpacity style={estilo.card} onPress={funcao}>
      <Image source={{ uri: imageUrl }} style={estilo.image} />
      <View style = {estilo.viewCard}>
      <Text style={estilo.titutoCard} numberOfLines= {1} ellipsizeMode= 'tail'>{titulo}</Text>
        <Text style={estilo.dataCard}>{data}</Text>
      </View>
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
  viewCard: {
    width: 300,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,

  },
  titutoCard: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 36,
    color: '#3F92C5',
    flexShrink: 1,
    width: '100%',
    textAlign: 'center'
  },

  dataCard: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
    color: '#8B8B8B',
  },

  image: {
    width: 200,
    height: 200,
  },
})

export default Card

