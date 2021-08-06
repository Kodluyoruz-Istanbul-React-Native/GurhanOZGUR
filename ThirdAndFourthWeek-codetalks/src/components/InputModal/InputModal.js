import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '../Button';
import styles from './InputModal.style';
import Modal from 'react-native-modal';

const InputModal = ({visible, onClose, onSend, loading, onPhotoPick}) => {
  const [text, setText] = useState('');

  function handleSend() {
    if (!text) {
      return;
    }
    onSend(text);
    setText(null);
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            style={styles.text_input}
            placeholder="Odanın adı ne olacak?"
            onChangeText={setText}
            placeholderTextColor="gray"
            multiline
          />
        </View>
        <View>
          <View style={styles.photo_container}>
            <Text style={styles.photo_title}>Peki ya fotoğraf?</Text>
            <Icon
              name="camera"
              size={25}
              color="orange"
              onPress={onPhotoPick}
            />
          </View>
          <Button title="Gönder" onPress={handleSend} loading={loading} />
        </View>
      </View>
    </Modal>
  );
};

export default InputModal;
