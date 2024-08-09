import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from '../components/CustomDrawer'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Home from './Home'

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {
  console.log("entrei aqui (DRAWER)")
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerStyle: {backgroundColor: '#2B1D62', height: 80},
        headerTintColor: '#FFFFFF',
        drawerActiveTintColor: '#2B1F5C',
        drawerStyle: {backgroundColor: '#2B1F5C'},
        drawerLabelStyle: {fontFamily: 'AveriaLibre-Regular', fontSize: 28, color: '#FFFFFF'},
      }} drawerContent={(props) => <CustomDrawer{...props}/>}>

      <DrawerNavigator.Screen name="Pesquisa" component={Home} options={{ drawerContentContainerStyle:{ justifyContent: 'flex-start'}, drawerIcon: ({ color, size }) => (<Icon name="description" size={40} color={'#FFFFFF'} />)}}/>

    </DrawerNavigator.Navigator>
  )
}

export default Drawer

