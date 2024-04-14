import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/Screens/Login'
import NovaConta from './src/Screens/NovaConta'
import RecuperarSenha from './src/Screens/RecuperarSenha'
import Drawer from './src/Screens/Drawer'
import NovaPesquisa from './src/Screens/NovaPesquisa'
import AcoesPesquisa from './src/Screens/AcoesPesquisa'
import ModificarPesquisa from './src/Screens/ModificarPesquisa'
import Coleta from './src/Screens/Coleta'
import Relatorio from './src/Screens/Relatorio'
import Agradecimento from './src/Screens/Agradecimento'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="NovaConta" component={NovaConta} options={{ headerTintColor: '#FFFFFF', headerTitle: 'Nova Conta', headerTitleStyle: {fontSize: 48, fontFamily: 'AveriaLibre-Regular'}, headerStyle: { backgroundColor: '#2B1D62', height: 80} }}/>
        <Stack.Screen name="RecuperarConta" component={RecuperarSenha} options={{headerTintColor: '#FFFFFF', headerTitle: 'Recuperar Senha', headerTitleStyle: {fontSize: 48, fontFamily: 'AveriaLibre-Regular'}, headerStyle: { backgroundColor: '#2B1D62', height: 80} }}/>
        <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }}/>
        <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} options={{ headerTintColor: '#FFFFFF', headerTitle: 'Nova Pesquisa', headerTitleStyle: {fontSize: 42, fontFamily: 'AveriaLibre-Regular'}, headerStyle: { backgroundColor: '#2B1D62', height: 80} }}/>
        <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} options={{ headerTintColor: '#FFFFFF', headerTitle: 'Carnaval', headerTitleStyle: {fontSize: 42, fontFamily: 'AveriaLibre-Regular'}, headerStyle: { backgroundColor: '#2B1D62', height: 80} }}/>
        <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} options={{ headerTintColor: '#FFFFFF', headerTitle: 'Carnaval', headerTitleStyle: {fontSize: 42, fontFamily: 'AveriaLibre-Regular'}, headerStyle: { backgroundColor: '#2B1D62', height: 80} }}/>
        <Stack.Screen name="Coleta" component={Coleta} options={{ headerShown: false }}/>
        <Stack.Screen name="Relatorio" component={Relatorio} options={{ headerTintColor: '#FFFFFF', headerTitle: 'Relatório', headerTitleStyle: {fontSize: 42, fontFamily: 'AveriaLibre-Regular'}, headerStyle: { backgroundColor: '#2B1D62', height: 80} }}/>
        <Stack.Screen name="Agradecimento" component={Agradecimento} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
