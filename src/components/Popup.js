import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Popup = ({ title = 'Tem certeza de apagar essa pesquisa?', visible = false, onClose }) => {
  return (
    <View style={styles.container} visible={visible}>
      <View style={styles.pop}>
        <Text style={styles.texto}>{title}</Text>
        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botao} onPress={onClose}>
            <Text style={styles.textoBotao}>SIM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, styles.botaoCancelar]} onPress={onClose}>
            <Text style={styles.textoBotao}>CANCELAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pop: {
    backgroundColor: '#2B1F5C',
    padding: 20,
    width: 506,
    height: 253,
  },
  texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 30,
    color: '#fff',
    marginBottom: 55,
    textAlign: 'center',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 30,
  },
  botao: {
    backgroundColor: '#FF8383',
    width: 216,
    height: 71,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoCancelar: {
    backgroundColor: '#3F92C5',
  },
  textoBotao: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#fff',
    fontSize: 36,
    textAlign: 'center',
  },
});

export default Popup;
