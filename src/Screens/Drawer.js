import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from '../components/CustomDrawer' 
import Home from './Home'

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator screenOptions={{headerTitle: '', headerStyle: {backgroundColor: '#2B1D62', height: 80}, drawerStyle: {backgroundColor: '#2B1F5C'}, drawerLabelStyle: {fontFamily: 'AveriaLibre-Regular', fontSize: 36, color: '#FFFFFF'}}} drawerContet={(props) => <CustomDrawer{...props}/>}>                
            <DrawerNavigator.Screen name='Pesquisas' component={Home}  options={{ headerTintColor: '#FFFFFF'}}/>
        </DrawerNavigator.Navigator>
    )  
}

export default Drawer

