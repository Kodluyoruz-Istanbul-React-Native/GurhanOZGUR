import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './Button.style';

const Button = ({onPress, title, theme = 'primary', loading}) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles[theme].text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
