import React, {useEffect, useState} from 'react';
import {View, FlatList, BackHandler, Alert, Platform} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import {showMessage} from 'react-native-flash-message';

import InputModal from '../../components/InputModal';
import ImageModal from '../../components/ImageModal';
import FloatingButton from '../../components/FloatingButton';
import RoomCard from '../../components/RoomCard/RoomCard';
import orderByDateContentData from '../../utils/parseContentData';
import styles from './Rooms.style';

const Rooms = ({navigation}) => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);
  const [image, setImage] = useState(null);
  const [roomImage, setRoomImage] = useState(null);
  const [roomImageLoading, setRoomImageLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    database()
      .ref('/rooms/')
      .on('value', snapshot => {
        const contentData = snapshot.val();

        const parsedData = orderByDateContentData(contentData || []); //TODO contentData boş ise boş bir array gönderecek
        setContentList(parsedData);
      });
  }, []);

  //#region
  //TODO Telefonun geri tuşuna basıldığı zaman bir önceki stack'e yönlendirme yapmaz, uygulamadan çıkar.
  const backAction = () => {
    Alert.alert('Bekle!', 'Uygulamadan çıkmak istediğine emin misin?', [
      {
        text: 'Vazgeç',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'EVET', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  //#endregion

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
    setImage(null);
  }

  async function handleImageToggle(roomText) {
    setRoomImageLoading(true);
    setImageModalVisible(!imageModalVisible);
    setRoomImage(null);
    try {
      const url = await storage().ref(roomText).getDownloadURL();
      setRoomImage(url);
    } catch (error) {
      showMessage({
        message: 'Tüh!',
        type: 'danger',
        icon: 'danger',
      });
    }
    setRoomImageLoading(false);
  }

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }

  const pickPhotoFromGallery = () => {
    ImagePicker.openPicker({
      height: 1280,
      width: 800,
      cropping: true,
    }).then(img => {
      const imageUri = Platform.OS === 'ios' ? img.sourceURL : img.path;
      setImage(imageUri);
    });
  };

  async function sendContent(content) {
    let roomCheck = [];
    contentList.forEach(e => {
      roomCheck.push(e.roomName);
    });

    if (roomCheck.includes(content)) {
      showMessage({
        message: 'Oda zaten mevcut!',
        type: 'danger',
        icon: 'danger',
      });
      return;
    }

    if (image === null) {
      showMessage({
        message: 'Oda fotoğrafı seçiniz!',
        type: 'danger',
        icon: 'danger',
      });
      return;
    }

    const userMail = auth().currentUser.email;
    const uploadUri = image;
    const imageName = content;

    const contentObject = {
      roomName: content,
      username: userMail.split('@')[0],
      createDate: new Date().toISOString(),
      photoUri: image,
    };

    try {
      setLoading(true);
      database().ref('/rooms/').push(contentObject);
      await storage().ref(imageName).putFile(uploadUri);

      setLoading(false);
    } catch (e) {
      showMessage({
        message: e.message,
        type: 'danger',
        icon: 'danger',
      });
    }
  }

  const renderProducts = ({item}) => (
    <RoomCard
      text={item.roomName}
      onPress={() => handleImageToggle(item.roomName)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.roomName}
        numColumns={2}
        data={contentList}
        renderItem={renderProducts}
      />
      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <InputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
        onPhotoPick={pickPhotoFromGallery}
        navigation={navigation}
        loading={loading}
      />
      <ImageModal
        visible={imageModalVisible}
        onClose={handleImageToggle}
        image={roomImage}
        loading={roomImageLoading}
      />
    </View>
  );
};

export default Rooms;
