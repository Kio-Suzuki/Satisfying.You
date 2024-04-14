import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

const Card = (props) => {
    const iconName = props.iconName;
    const titulo = props.titulo;
    const data = props.data;

    return (
        <TouchableOpacity style={estilo.card} onPress={props.funcao}>
            <Icon name={iconName} style={estilo.icon} />
            <Text style={estilo.titutoCard}>{titulo}</Text>
            <Text style={estilo.dataCard}>{data}</Text>
        </TouchableOpacity>
    );
};

const estilo = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: 310,
        height: 260,
        justifyContent: 'center',
        alignItems: 'center',
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
    },

    icon: {
        fontSize: 50,
        color: 'black',
    }

});

export default Card;
