import React from 'react';
import {Image, View, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';

import styles from './ImageModal.style';

const ImageModal = ({visible, onClose, image, loading}) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator
            style={styles.indicator}
            size="large"
            color="#ff6f00"
          />
        ) : (
          <Image style={styles.image} source={{uri: image}} />
        )}
      </View>
    </Modal>
  );
};

export default ImageModal;
