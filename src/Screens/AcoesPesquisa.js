import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const AcoesPesquisa = (props) => {

    

    const modificar = () => {
        props.navigation.navigate('ModificarPesquisa')
    }

    const coletar = () => {
        props.navigation.navigate('Coleta')
    }

    const relatorio = () => {
        props.navigation.navigate('Relatorio')
    }

    return (
        <View style={estilos.view}>
            
            <TouchableOpacity style={estilos.botao} onPress={modificar}>
                <Icon name='edit-square' size={120} color={'#FFFFFF'}/>
                <Text style={estilos.texto}>Modificar</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={estilos.botao} onPress={coletar}>
                <Icon name='check-box' size={120} color={'#FFFFFF'}/>
                <Text style={estilos.texto}>Coletar dados</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={estilos.botao} onPress={relatorio}>
                <Icon name='donut-large' size={120} color={'#FFFFFF'}/>
                <Text style={estilos.texto}>Relatório</Text>
            </TouchableOpacity>   
               
        </View>
    )
}

const estilos = StyleSheet.create({

    view:{
        backgroundColor: '#372775',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    botao: {
        backgroundColor: '#312464', 
        width: 271,
        height: 238,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10  
    },

    texto: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 28,
        color: '#FFFFFF',
    },
})

export default AcoesPesquisa