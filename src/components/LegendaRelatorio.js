import { View, Text, StyleSheet } from 'react-native'

const LegendaRelatorio = () =>{
    return(
        <View>
            <View style={estilos.legenda}>
            <View style={estilos.quadrado} backgroundColor="#F1CE7E" />
            <Text style={estilos.texto}>Excelente</Text>
            </View>

            <View style={estilos.legenda}>
            <View style={estilos.quadrado} backgroundColor="#6994FE" />
            <Text style={estilos.texto}>Bom</Text>
            </View>

            <View style={estilos.legenda}>
            <View style={estilos.quadrado} backgroundColor="#5FCDA4" />
            <Text style={estilos.texto}>Neutro</Text>
            </View>

            <View style={estilos.legenda}>
            <View style={estilos.quadrado} backgroundColor="#EA7288" />
            <Text style={estilos.texto}>Ruim</Text>
            </View>

            <View style={estilos.legenda}>
            <View style={estilos.quadrado} backgroundColor="#53D8D8" />
            <Text style={estilos.texto}>Péssimo</Text>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    texto: {
      fontFamily: 'AveriaLibre-Regular',
      fontSize: 36,
      color: '#FFFFFF',
      paddingLeft: 15
    },
  
    quadrado: {
      width: 35,
      height: 35,
    },
  
    legenda: {
      flexDirection: 'row',
      paddingTop: 15
    }
  })
  
  export default LegendaRelatorio