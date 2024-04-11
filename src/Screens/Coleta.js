import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Coleta = (props) => {

    const goToAgradecimentos = () => {
        props.navigation.navigate('Agradecimento')
    }

    const voltar = () => {
        props.navigation.navigate('AcoesPesquisa')
    }

    return (
        <View style={estilos.view}>

            <View>
                <TouchableOpacity style={estilos.botaoFechar} onPress={voltar}>
                    <Icon name='close' size={150} color='transparent'/> 
                </TouchableOpacity>
            </View>

            <View style={estilos.titulo}>
                <Text style={estilos.texto}>O que você achou do Carnaval de 2024?</Text>
            </View>

            <View style={estilos.opcoes}>
                <TouchableOpacity style={estilos.botao} onPress={goToAgradecimentos}>
                    <Icon name='sentiment-very-dissatisfied' size={120} color='#D71616'/>
                    <Text style={estilos.textBotao}>Pessímo</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity style={estilos.botao} onPress={goToAgradecimentos}>
                    <Icon name='sentiment-dissatisfied' size={120} color='#FF360A'/>
                    <Text style={estilos.textBotao}>Ruim</Text>  
                </TouchableOpacity>
                    
                <TouchableOpacity style={estilos.botao} onPress={goToAgradecimentos}>
                    <Icon name='sentiment-neutral' size={120} color='#FFC632'/>
                    <Text style={estilos.textBotao}>Neutro</Text>  
                </TouchableOpacity>
                    
                <TouchableOpacity style={estilos.botao} onPress={goToAgradecimentos}>
                    <Icon name='sentiment-satisfied' size={120} color='#37BD6D'/>
                    <Text style={estilos.textBotao}>Bom</Text>   
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao} onPress={goToAgradecimentos}>
                    <Icon name='mood' size={120} color='#25BC22'/>
                    <Text style={estilos.textBotao}>Excelente</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

const estilos = StyleSheet.create({

    view: {
        backgroundColor: '#372775',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        paddingHorizontal: 70
    },

    titulo: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    texto: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 52,
        color: '#FFFFFF',
    },

    opcoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 90,
    },

    textBotao: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 38,
        color: '#FFFFFF'   
    },

    center: {
        justifyContent: 'center',
        alignContent: 'center'
    },

    botao: {
        justifyContent: 'center',
        alignItems: 'center'   
    },

    botaoFechar: {
        position: 'absolute',
        top: -180,
        right: -90,
        
    }
})

export default Coleta