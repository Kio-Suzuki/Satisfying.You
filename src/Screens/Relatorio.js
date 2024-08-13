import { View, Text, StyleSheet, Image } from 'react-native'
import { BarChart, PieChart} from "react-native-gifted-charts";
import { usePesquisa } from '../context/PesquisaContext'

const Relatorio = () => {

  const { pesquisa } = usePesquisa();

  const data=[
    {value:pesquisa.nExcelente, color: '#F1CE7E', text: 'Excelente'}, 
    {value:pesquisa.nBom, color: '#6994FE', text: 'Bom'}, 
    {value:pesquisa.nNeutro, color: '#5FCDA4', text: 'Neutro'}, 
    {value:pesquisa.nRuim, color: '#EA7288', text: 'Ruim'},
    {value:pesquisa.nPessimo, color: '#53D8D8', text: 'Péssimo'} 
  ]

  return (
    <View style={estilos.view}>

      <View>
        <PieChart
          data={data}
          showText
          textColor="#FFF"
          showValuesAsLabels
          strokeWidth={0}
          radius={220}
        />
      </View>
      
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
    </View>
  )
}

const estilos = StyleSheet.create({

  view: {
    backgroundColor: '#372775',
    flex: 1,
    paddingHorizontal: 180,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

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

export default Relatorio