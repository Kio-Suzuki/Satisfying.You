import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Botao3 = (props) => {

  const texto = props.texto

  return (
    <TouchableOpacity style={estilo.fundo} onPress={props.funcao}>
      <Text style={estilo.texto}>{texto}</Text>
    </TouchableOpacity>
  )
}

const estilo = StyleSheet.create({
  fundo: {
    backgroundColor: '#FFFFFF',
    height: 94,
    width: 335,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
    color: '#939393',
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    justifyContent: 'center',
  },
})

export default Botao3
