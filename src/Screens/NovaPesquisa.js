// NovaPesquisa.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Alert, Platform, ActionSheetIOS } from 'react-native';
import Botao4 from '../components/Botao4';
import validator from 'validator';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { addDoc, setDoc, pesquisasCollection } from 'firebase/firestore'
import { storageRef, db, storage} from '../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const NovaPesquisa = (props) => {
  const [showError, setShowError] = useState(0);
  const [txtNomePesquisa, setNomePesquisa] = useState('');
  const [txtDataPesquisa, setDataPesquisa] = useState('');
  const [urlFoto, setUrlFoto] = useState('');
  const [foto, setFoto] = useState();

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
      console.log('Erro:' + JSON.stringify(error));
    });
  };

  const abrirGaleria = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.5 }).then((result) => {
      if (result.assets) {
        setUrlFoto(result.assets[0].uri);
        setFoto(result.assets[0]);
      }
    }).catch((error) => {
      console.log('Erro:' + JSON.stringify(error));
    });
  };

  const validarCampos = () => {
    const validaNomePesquisa = !validator.isEmpty(txtNomePesquisa);
    const validaDataPesquisa = regData.test(txtDataPesquisa);

    if (validaNomePesquisa && validaDataPesquisa) {
      addPesquisa();
    } else if (!validaNomePesquisa && validaDataPesquisa) {
      setShowError(1);
    } else if (validaNomePesquisa && !validaDataPesquisa) {
      setShowError(2);
    } else {
      setShowError(3);
    }
  };


  const addPesquisa = async () => {
    const imageRef = ref(storage, `${new Date().toISOString()}_${foto.name}`);
    const file = await fetch(urlFoto);
    const blob = await file.blob();

    await uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
    .then((uploadRes) => {
      try {
        getDownloadURL(uploadRes.ref).then((imageUrl) => {
          const docPesquisa = {
            nome: txtNomePesquisa,
            data: txtDataPesquisa,
            imagem: imageUrl,
            nExcelente: 0,
            nNeutro: 0,
            nBom: 0,
            nRuim: 0,
            nPessimo: 0
          };
          try {
            docPesquisa
            addDoc(pesquisasCollection, docPesquisa).then(() => {
                console.log("TA DRAWER")
                props.navigation.navigate('Drawer');
              }).catch((erro) => {
                console.log("TA ERRO")
                console.log("Erro:", erro);
              });
              console.log("TA AQUI")
          } catch (erro) {
            console.log('Erro: ', erro);
          }
        });
      } catch (erro) {
        console.log('Erro: ', erro);
      }
      console.log('Sucesso!!!');
    })
    .catch((error) => {
      console.log('Erro: ', error);
    });  
  }
  

  return (
    <View style={[estilos.view, {width: "100%", alignItems: "center"}]}>
      <View style={estilos.cNome}>
        <Text style={estilos.texto}>Nome</Text>
        <TextInput style={estilos.textInput} value={txtNomePesquisa} onChangeText={setNomePesquisa} />
        {(showError === 1 || showError === 3) && <Text style={estilos.erro}>Preencha o nome da pesquisa</Text>}
      </View>

      <View style={estilos.cData}>
        <Text style={estilos.texto}>Data</Text>
        <View>
          <Icon style={estilos.calendario} name="calendar-month" size={60} color="#AAAAAA" />
          <TextInput style={estilos.textInput} value={txtDataPesquisa} onChangeText={setDataPesquisa} />
        </View>
        {(showError === 2 || showError === 3) && <Text style={estilos.erro}>Preencha a data no formato DD/MM/YYYY</Text>}
      </View>

      <View style={estilos.cBotao1}>
        <Text style={estilos.texto}>Imagem</Text>
        {urlFoto ? <Image source={{ uri: urlFoto }} style={{ height: 'auto', width: '100%', position: 'absolute' }} /> : null}
        <Botao4 texto="Câmera/Galeria de imagens" funcao={buscaImagem} />
      </View>
      <Text style={estilos.erro}>Preencha o nome da pesquisa</Text>

      <View style={estilos.cBotao2}>
        <Button title="CADASTRAR" onPress={validarCampos} />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 203,
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
    marginTop: 2
  },
  erro: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    color: '#FD7979',
    marginTop: 5,
  },
  cNome: {
    position: 'absolute',
    marginTop: 20,
    width: 500,
  },
  cData: {
    position: 'absolute',
    marginTop: 150,
    width: 500,
    marginHorizontal: 203
  },
  cBotao1: {
    position: 'absolute',
    marginTop: 270,
    width: 500,
    marginHorizontal: 203,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: "28px"
  },
  cBotao2: {
    backgroundColor: "#37BD6D",
    position: 'absolute',
    marginTop: 440,
    width: "80%",
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
