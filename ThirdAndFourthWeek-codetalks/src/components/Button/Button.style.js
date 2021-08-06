import {StyleSheet} from 'react-native';

const base_style = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: '#ffa040',
    },
    text: {
      ...base_style.text,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'white',
    },
    text: {
      ...base_style.text,
      color: '#ffa040',
    },
  }),
};
