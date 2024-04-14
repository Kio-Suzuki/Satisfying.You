import { View, Text, StyleSheet } from 'react-native'
import React from 'react';

const Agradecimento = ({ navigation }, props) => {

  setTimeout(() => {
    navigation.navigate('Coleta');
  }, 3000);

  return (
    <View style={estilos.view}>
      <Text style={estilos.texto}>Obrigado por participar da pesquisa!</Text>
      <Text style={estilos.texto}>Aguardamos você no próximo ano!</Text>
    </View>
  )
}

const estilos = StyleSheet.create({

  view: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 48,
    color: '#FFFFFF',
    padding: 25
  }
})

export default Agradecimento