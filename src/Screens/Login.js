import {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import validator from 'validator';
import Botao from '../components/Botao';
import Botao2 from '../components/Botao2';
import Botao3 from '../components/Botao3';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useUsuario } from '../context/UserContext'


const Login = props => {
  
  const { setUsuario, setEmailUsuario, setUidUsuario } = useUsuario();
  const [txtEmail, setEmail] = useState('');
  const [txtSenha, setSenha] = useState('');
  const [showError, setShowError] = useState();

  const entrarHome = () => {
    var valida = validator.isEmail(txtEmail);
    if (valida) {
      signInWithEmailAndPassword(auth, txtEmail, txtSenha).then((userCredentials) => {
        setUsuario(userCredentials)
        setEmailUsuario(userCredentials.user.email)
        setUidUsuario(userCredentials.user.uid)
        setEmail('')
        setSenha('')
        props.navigation.navigate('Drawer');
      }).catch((erro) => {
        switch (erro.code) {
          case "auth/user-not-found":
            setShowError("Email não cadastrado!")
            break;
          case "auth/wrong-password":
            setShowError("Email ou senha inválido(s)!")
            break;
          case "auth/invalid-login-credentials":
            setShowError("Email ou senha inválido(s)!")
            break;
          default:
            setShowError("Erro, tente novamente mais tarde!")
            break;
        }
      })
    } else {
      setShowError("Email inválido");
    }
  }

  const novaConta = () => {
    props.navigation.navigate('NovaConta');
  };

  const recuparConta = email => {
    if (email) {
      props.navigation.navigate('RecuperarConta');
    }
  };

  return (
    <View style={estilos.view}>
      <View style={estilos.cTitulo}>
        <Text style={estilos.titulo}>Satisfying.you</Text>
        <Icon name="sentiment-satisfied" size={75} color="#FFFFFF" />
      </View>

      <View style={estilos.tamanhoPadrao}>
        <Text style={estilos.texto}>E-mail</Text>
        <TextInput
          style={estilos.textInput}
          keyboardType="email-address"
          value={txtEmail}
          onChangeText={setEmail}
        />

        <Text style={estilos.texto}>Senha</Text>
        <TextInput
          style={estilos.textInput}
          secureTextEntry={true}
          value={txtSenha}
          onChangeText={setSenha}
        />
        {showError ? <Text style={estilos.erro}> {showError} </Text> : null}
      </View>

      <View style={[estilos.cBotao1,estilos.tamanhoPadrao]}>
        <Botao texto="Entrar" funcao={entrarHome} />
      </View>

      <View style={[estilos.cBotao2,estilos.tamanhoPadrao]}>
        <Botao2 texto="Criar minha conta" funcao={novaConta} />
        <Botao3 texto="Esqueci minha senha" funcao={recuparConta} />
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },

  cTitulo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
  },
  titulo: {
    fontSize: 64,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
  },

  texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 28,
    color: '#FFFFFF',
    marginTop: 20,
  },
  erro:{
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    color: '#FD7979',
    marginTop: 5,
  },
  cBotao1: {
    position: 'absolute',
    marginTop: 380,
  },

  cBotao2: {
    position: 'absolute',
    marginTop: 590,
  },

  textInput: {
    fontSize: 28,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
    color: '#3F92C5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tamanhoPadrao: {
    width: "70%"
  }
});

export default Login;
