import { DrawerContetScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { View, Text, Image } from 'react-native'

const CustomDrawer = (props) => {
    return (
        <DrawerContetScrollView {...props}>
            <View>
                <Text>usuario@dominio.com</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem labelStyle={{ color: '#FFFFFF'}} label='Sair' onPress={() => {props.navaigation.popToTop()}}/>
        </DrawerContetScrollView>
    )
}

export default CustomDrawer