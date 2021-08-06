import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    height: deviceSize.height / 4,
    margin: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 6,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    color: '#ff6f00',
    fontSize: 25,
  },
});
