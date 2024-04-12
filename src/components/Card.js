import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

const Card = (props) => {

    const imagemSource = props.imageSource
    const titulo = props.titulo
    const data = props.data

    return (
        <TouchableOpacity style={estilo.card} onPress={props.funcao}>
            <Image source={imagemSource}/>
            <Text style={estilo.titutoCard}>{titulo}</Text>
            <Text style={estilo.dataCard}>{data}</Text>
        </TouchableOpacity>
    )
}

const estilo = StyleSheet.create({

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10, 
        width: 310,
        height: 260,
        justifyContent: 'center',
        alignItems: 'center'  
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
    }
})

export default Card