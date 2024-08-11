import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Alert, ActionSheetIOS } from 'react-native'
import { useState, useLayoutEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Botao from '../components/Botao'
import Popup from '../components/Popup'
import validator from 'validator';
import { useUsuario } from '../context/UserContext';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db, storage} from '../config/firebase';
import { ref, deleteObject, uploadBytes, getDownloadURL} from "firebase/storage";
import { usePesquisa } from '../context/PesquisaContext'
import { useNavigation } from '@react-navigation/native';

const Modificar = (props) => {

  const { pesquisa } = usePesquisa();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: pesquisa.nome,
    });
  }, [navigation]);
  
  const [txtNomePesquisa, setNomePesquisa] = useState(pesquisa.nome)
  const [txtDataPesquisa, setDataPesquisa] = useState(pesquisa.data)
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const urlFotoAntiga = pesquisa.imagem;
  const [urlFoto, setUrlFoto] = useState(urlFotoAntiga);
  const [foto, setFoto] = useState();
  const [showError, setShowError] = useState(0);
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
      updatePesquisa();
    } else if (!validaNomePesquisa && validaDataPesquisa) {
      setShowError(1);
    } else if (validaNomePesquisa && !validaDataPesquisa) {
      setShowError(2);
    } else {
      setShowError(3);
    }
  };

  const updatePesquisa = async () => {

    const pesRef = doc(db, 'pesquisas', pesquisa.id);

    if(urlFoto!=urlFotoAntiga){
      try{
        const referencia = ref(storage, imagemUrl)
        await deleteObject(referencia);
      }catch(erro){
        console.log(erro)
      }

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
              imagemRef: imageUrl+".jpeg",
            };
            updateDoc(pesRef, docPesquisa).then(() => {
                props.navigation.navigate('Drawer');
              }).catch((erro) => {
                console.log("TA ERRO")
                console.log("Erro no addDoc:", erro);
              });
              console.log("TA AQUI")
          });
        } catch (erro) {
          console.log('Erro do getDownload: ', erro);
        }
        console.log('Sucesso!!!');
      })
      .catch((error) => {
        console.log('Erro de tudo: ', error);
      }); 
    }else{
      const docPesquisa= {
        nome: txtNomePesquisa,
        data: txtDataPesquisa
      }
      updateDoc(pesRef, docPesquisa)
        .then(() => {
          props.navigation.navigate('Drawer');
        })
        .catch((error) => {
          Alert.alert('Erro', 'Houve um erro ao atualizar a pesquisa.');
        });
    }
  };

  const deletePesquisa = () => {
    deleteDoc(doc(db, 'pesquisas', pesquisa.id))
      .then(() => {
        props.navigation.navigate('Drawer');
      })
      .catch((error) => {
        Alert.alert('Erro', 'Houve um erro ao deletar a pesquisa. Contate o Lucio do TI');
      });
  };

  const acoes = () => {
    props.navigation.navigate('AcoesPesquisa')
  }
  const excluir = () => {
    setIsPopupVisible(true);
  };


  return (
    <View style={estilos.view}>

      <View>
        <Text style={estilos.texto}>Nome</Text>
        <TextInput style={estilos.textInput} value={txtNomePesquisa} onChangeText={setNomePesquisa}/>
        {(showError === 1 || showError === 3) && <Text style={estilos.erro}>Preencha o nome da pesquisa</Text>}

        <Text style={estilos.texto}>Data</Text>        
        <View>
          <Icon style={estilos.calendario} name="calendar-month" size={60} color="#AAAAAA" />
          <TextInput style={estilos.textInput} value={txtDataPesquisa} onChangeText={setDataPesquisa} />
          {(showError === 2 || showError === 3) && <Text style={estilos.erro}>Preencha a data no formato DD/MM/YYYY</Text>}
        </View>

        <Text style={estilos.texto}>Imagem</Text>
        <TouchableOpacity style={estilos.botaoImagem} onPress={buscaImagem}>
          <Icon name="celebration" size={80} color={'#C60EB3'}/>
        </TouchableOpacity>
      </View>

      <View style={estilos.containerSalvar}>
        <Botao texto="SALVAR" funcao={validarCampos}/>
      </View>

      <View style={estilos.containerApagar}>
        <TouchableOpacity style={estilos.botaoApagar} onPress={excluir}>
          <Icon name="delete" size={70} color={'#FFFFFF'}/>
          <Text style={estilos.textApagar}>Apagar</Text>
        </TouchableOpacity>
      </View>

      { isPopupVisible && <Popup title="Confirmar Exclusão" text="Deseja realmente excluir essa pesquisa?" onClose={() => setIsPopupVisible(false)} onPress={deletePesquisa} /> }
    </View>
  )
}

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 203
  },

  texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 28,
    color: '#FFFFFF',
    marginTop: 25

  },

  containerSalvar: {
    paddingTop: 20
  },

  textApagar: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
    color: '#FFFFFF',
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

  botaoImagem: {
    backgroundColor: '#FFFFFF',
    height: 94,
    width: 335,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoApagar: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerApagar: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20
  },
  calendario:{
    position: 'absolute',
    zIndex: 9999,
    alignSelf: 'flex-end'
  }
})

export default Modificar