import { View, Text, StyleSheet, Image } from 'react-native'
import { BarChart, PieChart} from "react-native-gifted-charts";
import { usePesquisa } from '../context/PesquisaContext'
import LegendaRelatorio from '../components/LegendaRelatorio';

const Relatorio = () => {

  const { pesquisa } = usePesquisa();
  let data = false;

  if(pesquisa.nExcelente != 0 || pesquisa.nBom != 0 || pesquisa.nNeutro != 0 || pesquisa.nRuim != 0 || pesquisa.nPessimo != 0){
    data=[
      {value:pesquisa.nExcelente, color: '#F1CE7E', text: 'Excelente'}, 
      {value:pesquisa.nBom, color: '#6994FE', text: 'Bom'}, 
      {value:pesquisa.nNeutro, color: '#5FCDA4', text: 'Neutro'}, 
      {value:pesquisa.nRuim, color: '#EA7288', text: 'Ruim'},
      {value:pesquisa.nPessimo, color: '#53D8D8', text: 'Péssimo'} 
    ]
  } 
  return (
     <View style={estilos.view}>
      
      { data ? <View>
        <PieChart
          data={data}
          showText
          textColor="#FFF"
          strokeWidth={0}
          radius={220}
        />
      </View>: <Text style={estilos.erroDados}>DADOS NÃO FORAM COLETADOS</Text> }
      
      { data ? <LegendaRelatorio /> :null}
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
  },
  erroDados: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -190}, { translateY: -50 }],
    color: '#FFFFFF',
    fontSize: 50,
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
  }

})

export default Relatorio