import React from 'react';
import {TextInput} from 'react-native';
import styles from './Input.style';

const Input = ({placeholder, value, onChangeText, secureTextEntry}) => {
  return (
    <TextInput
      style={styles.container}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#eeeeee"
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
