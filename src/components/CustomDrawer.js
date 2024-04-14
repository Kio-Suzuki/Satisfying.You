import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>

      <View>
        <Text style={{fontSize: 28, color: '#FFFFFF', fontFamily: 'AveriaLibre-Regular', alignSelf: 'center'}}>usuario@dominio.com</Text>
        <View style={{height: 2, backgroundColor: '#FFFFFF', marginVertical: 25}} />
      </View>

      <DrawerItemList {...props} />

      <View style={{justifyContent: 'flex-end', flex: 1}}>
        <DrawerItem
          labelStyle={{ fontSize: 28, color: '#FFFFFF', fontFamily: 'AveriaLibre-Regular' }}
          label="Sair"
          onPress={() => props.navigation.popToTop()}
          icon={() => <Icon name="logout" size={40} color="#FFFFFF" />}
        />
      </View>

    </DrawerContentScrollView>
  )
}

export default CustomDrawer