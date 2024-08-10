import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { View, Text } from 'react-native'
import { signOut } from 'firebase/auth'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { auth } from '../config/firebase'
import { useUsuario } from '../context/UserContext'

const CustomDrawer = (props) => {

    const { setUsuario } = useUsuario();

    const logout = () => {
        signOut(auth).then(() => {
            props.navigation.popToTop();
            setUsuario(null)
          }).catch((error) => {
            console.log(error)
          });
    }

    return (
        <DrawerContentScrollView {...props} style={{padding: 20}}>

            <View>
                <Text style={{fontSize: 28, color: '#FFFFFF', fontFamily: 'AveriaLibre-Regular', alignSelf: 'center'}}>usuario@dominio.com</Text>
                <View style={{height: 2, backgroundColor: '#FFFFFF', marginVertical: 25}} />
            </View>

                <DrawerItemList {...props} />

            <View style={{ paddingTop: 340 }}>
                <DrawerItem 
                labelStyle={{fontSize: 28, color: '#FFFFFF', fontFamily: 'AveriaLibre-Regular'}} 
                label='Sair' onPress={logout} 
                icon={() => <Icon name="logout" size={40} color="#FFFFFF"/>}/>
            </View>
        
        </DrawerContentScrollView>
    )
}

export default CustomDrawer