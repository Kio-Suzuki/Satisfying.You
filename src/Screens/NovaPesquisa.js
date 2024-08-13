// NovaPesquisa.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Alert, Platform, ActionSheetIOS, TouchableOpacity } from 'react-native';
import validator from 'validator';
import Botao from '../components/Botao'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { addDoc } from 'firebase/firestore'
import { storage, pesquisasCollection} from '../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useUsuario } from '../context/UserContext'

const NovaPesquisa = (props) => {
  const [errors, setErrors] = useState({});
  const [txtNomePesquisa, setNomePesquisa] = useState('');
  const [txtDataPesquisa, setDataPesquisa] = useState('');
  const [urlFoto, setUrlFoto] = useState('');
  const [foto, setFoto] = useState();
  const { uid } = useUsuario();

  const regData = /^\d{2}\/\d{2}\/\d{4}$/;
  const buscaImagem = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancelar', 'Câmera', 'Galeria'],
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {
          if (buttonIndex === 1) {
            abrirCamera();
          } else if (buttonIndex === 2) {
            abrirGaleria();
          }
        }
      );
    } else {
      Alert.alert(
        'Selecionar Imagem',
        'Escolha uma opção',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Câmera', onPress: abrirCamera },
          { text: 'Galeria', onPress: abrirGaleria },
        ],
        { cancelable: true }
      );
    }
  };

  const abrirCamera = () => {
    launchCamera({ mediaType: 'photo', cameraType: 'front', quality: 0.5 }).then((result) => {
      if (result.assets) {
        setUrlFoto(result.assets[0].uri);
        setFoto(result.assets[0]);
      }
    }).catch((error) => {
      setShowError(4)
    });
  };

  const abrirGaleria = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.5 }).then((result) => {
      if (result.assets) {
        setUrlFoto(result.assets[0].uri);
        setFoto(result.assets[0]);
      }
    }).catch((error) => {
      setShowError(4)
    });
  };

  const validarCampos = () => {
    let errors = {};
    if (validator.isEmpty(txtNomePesquisa)) {
      errors.nome = 'Preencha o nome da pesquisa';
    }
    if (!regData.test(txtDataPesquisa)) {
      errors.data = 'Preencha a data no formato DD/MM/YYYY';
    }
    if (!foto) {
      errors.foto = 'Insira a imagem';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      addPesquisa();
    }
  };


  const addPesquisa = async () => {
    const nomeImagem = `${new Date().toISOString()}_${foto.name}`
    const imageRef = ref(storage, nomeImagem);
    const file = await fetch(urlFoto);
    const blob = await file.blob();

    await uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
    .then((uploadRes) => {
      try {
        getDownloadURL(uploadRes.ref).then((imageUrl) => {
          const docPesquisa = {
            nome: txtNomePesquisa.toUpperCase(),
            data: txtDataPesquisa,
            imagem: imageUrl,
            imagemRef: nomeImagem,
            nExcelente: 0,
            nNeutro: 0,
            nBom: 0,
            nRuim: 0,
            nPessimo: 0,
            userId: uid
          };
          try {
            addDoc(pesquisasCollection, docPesquisa).then(() => {
                props.navigation.navigate('Drawer');
              }).catch((erro) => {
                setShowError(4)
              });
          } catch (erro) {
            setShowError(4)
          }
        });
      } catch (erro) {
        setShowError(4)
      }
    })
    .catch((error) => {
      setShowError(4)
    });  
  }
  

  return (
    <View style={estilos.view}>
      <View style={estilos.cForm}>
        <View style={estilos.nomeInput}>
          <Text style={estilos.texto}>Nome</Text>
          <TextInput style={estilos.textInput} value={txtNomePesquisa} onChangeText={setNomePesquisa} />
          {errors.nome && <Text style={estilos.erro}>{errors.nome}</Text>}
        </View>

        <View style={estilos.nomeInput}>
          <Text style={estilos.texto}>Data</Text>
          <View>
            <Icon style={estilos.calendario} name="calendar-month" size={60} color="#AAAAAA" />
            <TextInput style={estilos.textInput} value={txtDataPesquisa} onChangeText={setDataPesquisa} />
          </View>
          {errors.data && <Text style={estilos.erro}>{errors.data}</Text>}
        </View>

        <View style={estilos.selecaoImagem}>
          <Text style={estilos.texto}>Imagem</Text>
          <TouchableOpacity style={estilos.botaoImagem} onPress={buscaImagem}>
            { urlFoto ? <Image source={{ uri: urlFoto }} style={{ height: 133, width: 133}}></Image> : null}
            { !urlFoto ? <Text style={estilos.textoSelecaoImagem}> Câmera/Galeria de imagens</Text>:null}
          </TouchableOpacity>
          {errors.foto && <Text style={[estilos.erro, { marginTop: '38%' }]}>{errors.foto}</Text>}
        </View>

      </View>
      <View style={estilos.containerSalvar}>
        <Botao texto="CADASTRAR" funcao={validarCampos}/>
      </View>  
    </View>
  );
}

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    flexDirection: 'column',
    width: "100%", 
    height: '100%',
    alignItems: "center", 
    justifyContent: 'space-around',
  },
  cForm:{
    width: '70%',
    height: '70%',
    gap: 35,
    padding: 0,
    alignItems: 'start',
    justifyContent: 'space-between'
  },
  selecaoImagem: {
    width: '50%'
  },
  botaoImagem: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '50%'
  },
  textoSelecaoImagem: {
    color: '#939393',
    fontSize: 23,
    fontFamily: 'AveriaLibre-Regular'
  },
  containerSalvar: {
    width: '70%',
    marginBottom: 5
  },
  cTitulo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 130
  },
  titulo: {
    fontSize: 64,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular'
  },
  texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 28,
    color: '#FFFFFF',
    marginTop: 2,
    marginBottom: 10
  },
  erro: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
    position: 'absolute',
    color: '#FD7979',
    marginTop: '11%',
  },
  nomeInput:{
    width: '100%',
  },
  cBotao1: {
    size: '200px',
    position: 'absolute',
    width: '100%',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: "28px"
  },
  cBotao2: {
    borderWidth: 5,
    backgroundColor: "#49B976",
    width: "90%",
    height: 50,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: "28px"
  },
  textInput: {
    fontSize: 28,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
    color: '#3F92C5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  calendario: {
    position: 'absolute',
    zIndex: 9999,
    alignSelf: 'flex-end'
  }
});

export default NovaPesquisa;
